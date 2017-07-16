import React from 'react';

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

    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="comment-box">
        <textarea value={this.state.comment} onChange={this.onChange}/>
        <button>Submit Comment</button>
      </form>
    );
  }
}

export default CommentBox;
