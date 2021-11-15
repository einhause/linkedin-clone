import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';

export function signInAPI() {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SIGNIN,
    });
  };
}
