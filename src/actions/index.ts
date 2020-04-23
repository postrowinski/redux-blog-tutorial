import jsonPlaceholder from '../api/jsonPlaceholder';
import { AxiosResponse } from 'axios';
import { Post, User } from '../intercafes/interfaces'
import { TYPE } from '../intercafes/types';
import * as _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .map((id: number) => {
            dispatch(fetchUser(id))
        })
        .value()
}

export const fetchPosts = () => async (dispatch) => {
    const response: AxiosResponse<Post[]> = await jsonPlaceholder.get('/posts');
    dispatch({
        type: TYPE.FETCH_POSTS,
        payload: response.data
    })
}

export const fetchUser = (id: number) => async (dispatch) => {
    const response: AxiosResponse<User> = await jsonPlaceholder.get(`/users/${id}`) ;
    dispatch({
        type: TYPE.FETCH_USER,
        payload: response.data
    })
};