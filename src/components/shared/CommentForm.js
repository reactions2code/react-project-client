import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const CommentForm = ({ comment, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Comment:</label><br/>
    <input
      placeholder='comment...'
      value={comment.content}
      name='content'
      onChange={handleChange}
    /><br/>
    <br/>
    <OutlineButton variant="success" type="submit">Submit</OutlineButton>
    <Link to={cancelPath}>
      <OutlineButton variant="dark">Cancel</OutlineButton>
    </Link>
  </form>
)

export default CommentForm
