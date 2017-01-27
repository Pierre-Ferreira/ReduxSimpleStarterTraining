import React from 'react';
import { connect } from 'react-redux' // Connect turns the component into a container.
// A container is a React component that has access to application level state through Redux.
// Functional component.
const CommentList = (props) => {
  const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
  return (
    <ul className='comment-list'>{list}</ul>
  )
}

function mapStateToProps(state) {
  return  { comments: state.comments };
}
export default connect(mapStateToProps)(CommentList); // Connect turns the component into a container.
