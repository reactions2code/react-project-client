import React from 'react'

const CommentIndex = ({ content }) => (
  <div>
    {content} <br/>
    <button>Edit</button>
    <button>Delete</button>
  </div>
)

export default CommentIndex
