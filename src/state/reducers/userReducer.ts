import { ActionType } from '../action-types';
import { Action } from '../actions';

import { auth, provider } from '../../firebase';

interface InitialStateType {
  user: string | null;
}

const INITIAL_STATE: InitialStateType = {
  user: null,
};

const userReducer = (
  state: InitialStateType = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case ActionType.SIGNIN:
      auth
        .signInWithPopup(provider)
        .then((payload: any) => {
          console.log(typeof payload, payload);
        })
        .catch((err: any) => alert(err.message));
      return state;
    default:
      return state;
  }
};

export default userReducer;
