import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';
import { auth, provider } from '../../firebase';

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
