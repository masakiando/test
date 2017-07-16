import React, { Component } from 'react';
import CommentBox from './commentBox';
import CommentList from './CommentList';

export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
