import { ActionType } from '../action-types';

interface SignInAction {
  type: ActionType.SIGNIN;
}

export type Action = SignInAction;
