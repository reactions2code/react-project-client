import React from 'react'

const CommentIndex = ({ content, deleteComment }) => (
  <div>
    {content} <br/>
    <button>Edit</button>
    <button onClick={deleteComment}>Delete</button>
  </div>
)

export default CommentIndex
