import { ActionType } from '../action-types';
import firebase from 'firebase/app';

interface SetUserAction {
  type: ActionType.SET_USER;
  user: firebase.User | null;
}

interface SignInApi {
  type: ActionType.SIGN_IN_API;
}

export type Action = SetUserAction | SignInApi;
