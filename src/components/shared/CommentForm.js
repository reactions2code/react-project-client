import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const CommentForm = ({ comment, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>comment</label>
    <input
      placeholder='comment...'
      value={comment.content}
      name='content'
      onChange={handleChange}
    />
    <OutlineButton variant="success" type="submit">Submit</OutlineButton>
    <Link to={cancelPath}>
      <OutlineButton variant="dark">Cancel</OutlineButton>
    </Link>
  </form>
)

export default CommentForm
