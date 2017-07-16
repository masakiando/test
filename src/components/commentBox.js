import React from 'react';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' }
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {

  }

  render() {
    return (
      <div className="comment-box">
        <textarea value={this.state.comment} onChange={this.onChange}/>
        <button>Submit Comment</button>
      </div>
    );
  }
}

export default CommentBox;
