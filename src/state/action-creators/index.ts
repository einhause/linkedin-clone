import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';
import db, { auth, provider, storage } from '../../firebase';

/* User State */
export function signInAPI() {
  return (dispatch: Dispatch<Action>) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch({
          type: ActionType.SET_USER,
          user: payload.user,
        });
      })
      .catch((err) => alert(err.message));
  };
}

export function getUserAuth() {
  return (dispatch: Dispatch<Action>) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch({
          type: ActionType.SET_USER,
          user,
        });
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch: Dispatch<Action>) => {
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: ActionType.SET_USER,
          user: null,
        });
      })
      .catch((err) => alert(err.message));
  };
}

/* Article State */
export function postArticleAPI(payload: any) {
  return (dispatch: Dispatch<Action>) => {
    if (payload?.image) {
      const upload = storage
        .ref(`/images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`);

          if (snapshot.state === 'RUNNING') {
            console.log(`Progress: ${progress}%`);
          }
        },
        (err) => console.error(err.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection('articles').add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: '',
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
        }
      );
    } else if (payload?.video) {
      db.collection('articles').add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: '',
        comments: 0,
        description: payload.description,
      });
    }
  };
}

/* Modal State */
export function toggleModal() {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLE_POST_MODAL,
    });
  };
}
