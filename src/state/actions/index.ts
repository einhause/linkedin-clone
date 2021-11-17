import { ActionType } from '../action-types';
import firebase from 'firebase/app';

interface SetUserAction {
  type: ActionType.SET_USER;
  user: firebase.User | null;
}

interface SignInApi {
  type: ActionType.SIGN_IN_API;
}

interface SetArticleLoading {
  type: ActionType.SET_ARTICLE_LOADING;
  isLoading: boolean;
}

interface TogglePostModal {
  type: ActionType.TOGGLE_POST_MODAL;
}

export type Action =
  | SetUserAction
  | SignInApi
  | TogglePostModal
  | SetArticleLoading;
