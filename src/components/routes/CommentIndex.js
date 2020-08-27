import React from 'react'
import OutlineButton from '../shared/OutlineButton.js'

const CommentIndex = ({ content, deleteComment, editComment }) => (
  <div>
    {content} <br/>
    <OutlineButton size="sm" onClick={editComment} variant="outline-warning">Edit</OutlineButton>
    <OutlineButton size="sm" onClick={deleteComment} variant="outline-danger">Delete</OutlineButton>
  </div>
)

export default CommentIndex
