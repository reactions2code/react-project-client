import React from 'react'
import OutlineButton from '../shared/OutlineButton.js'

const CommentIndex = ({ content, deleteComment, editComment, owner }) => (
  <div className='comments'>
    {content} <br/>
    <br/>
    { owner
      ? (<React.Fragment>
        <OutlineButton size="sm" onClick={editComment} variant="outline-info">Edit</OutlineButton>
        <OutlineButton size="sm" onClick={deleteComment} variant="outline-danger">Delete</OutlineButton>
      </React.Fragment>)
      : ('') }
  </div>
)

export default CommentIndex
