import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { brouserHistory } from 'react-router';

// import the root reduser
import rootReducer from './redusers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object fordefault data
const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(brouserHistory);

export default store;