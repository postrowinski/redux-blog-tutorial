import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export const reducer = combineReducers({
    posts: postsReducer,
    users: usersReducer
});