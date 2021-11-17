import { ActionType } from '../action-types';
import { Action } from '../actions';

type ArticleStateType = {
  loading: boolean;
};

export const INITIAL_STATE: ArticleStateType = {
  loading: false,
};

const articleReducer = (
  state: ArticleStateType = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case ActionType.SET_ARTICLE_LOADING:
      return { ...state, loading: action.isLoading };
    default:
      return state;
  }
};

export default articleReducer;
