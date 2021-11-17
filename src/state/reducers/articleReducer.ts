import { ActionType } from '../action-types';
import { Action } from '../actions';
import firebase from 'firebase/app';

type ArticleStateType = {
  loading: boolean;
  articles: firebase.firestore.DocumentData[];
};

export const INITIAL_STATE: ArticleStateType = {
  loading: false,
  articles: [],
};

const articleReducer = (
  state: ArticleStateType = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case ActionType.SET_ARTICLE_LOADING:
      return { ...state, loading: action.isLoading };
    case ActionType.GET_ARTICLES:
      return { ...state, articles: action.articles };
    default:
      return state;
  }
};

export default articleReducer;
