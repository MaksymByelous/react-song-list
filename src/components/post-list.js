import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

export default class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div>Post list</div>
    }
}

export connect(null, {fetchPosts})(PostList);