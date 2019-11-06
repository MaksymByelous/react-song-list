import React from 'react';
import jsonPlaceholder from '../apis/json-placeholder'

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({
        type: 'FETCH_POSTS',
        payload: response
    })
}