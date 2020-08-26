import React from 'react'

const CommentIndex = ({ content, deleteComment, editComment }) => (
  <div>
    {content} <br/>
    <button onClick={editComment}>Edit</button>
    <button onClick={deleteComment}>Delete</button>
  </div>
)

export default CommentIndex
