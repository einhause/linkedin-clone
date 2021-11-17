import { combineReducers } from 'redux';
import userReducer from './userReducer';
import modalReducer from './modalReducer';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  article: articleReducer,
});

export default rootReducer;
