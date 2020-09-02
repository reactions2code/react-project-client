import React from 'react'
import OutlineButton from '../shared/OutlineButton.js'

<<<<<<< HEAD
const CommentIndex = ({ content, deleteComment, editComment, owner, user }) => {
  let canEditAndUpdate = ''
  if (owner === user) {
    canEditAndUpdate = (
      <div className='comments'>
        {content} <br/>
        <br/>
        <OutlineButton size="sm" onClick={editComment} variant="outline-info">Edit</OutlineButton>
        <OutlineButton size="sm" onClick={deleteComment} variant="outline-danger">Delete</OutlineButton>
      </div>
    )
  } else if (owner !== user) {
    canEditAndUpdate = (
      <div className='comments'>
        {content}
      </div>
    )
  }

  return (
    canEditAndUpdate
  )
}
=======
// const ownerOfComment = (this.user.id === this.comment.owner.id)
// or
// const ownerOfComment = (this.user.id && this.comment.owner.id)
// ownerOfComment

const CommentIndex = ({ content, deleteComment, editComment }) => (
  <div className='comments'>
    {content} <br/>
    <br/>
    {this.comment
      ? (<React.Fragment>
        <OutlineButton size="sm" onClick={editComment} variant="outline-info">Edit</OutlineButton>
        <OutlineButton size="sm" onClick={deleteComment} variant="outline-danger">Delete</OutlineButton>
      </React.Fragment>)
      : ('')}
  </div>
)
>>>>>>> Ternary statement

export default CommentIndex
