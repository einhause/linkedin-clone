import { ActionType } from '../action-types';
import { Action } from '../actions';

type ModalStateType = {
  modalIsOpen: boolean;
};

export const INITIAL_STATE: ModalStateType = {
  modalIsOpen: false,
};

const modalReducer = (
  state: ModalStateType = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case ActionType.TOGGLE_POST_MODAL:
      return { ...state, modalIsOpen: !state.modalIsOpen };
    default:
      return state;
  }
};

export default modalReducer;
