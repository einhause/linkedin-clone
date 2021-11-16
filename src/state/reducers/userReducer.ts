import { ActionType } from '../action-types';
import { Action } from '../actions';
import firebase from 'firebase/app';

type StateType = {
  user: firebase.User | null;
};

export const INITIAL_STATE: StateType = {
  user: null,
};

const userReducer = (state: StateType = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default userReducer;
