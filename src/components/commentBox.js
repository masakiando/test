import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentActions';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ comment: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="comment-box">
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.onChange}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

CommentBox.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(commentActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(CommentBox);
