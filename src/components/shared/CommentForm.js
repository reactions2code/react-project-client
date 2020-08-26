import React from 'react'
import { Link } from 'react-router-dom'

const CommentForm = ({ comment, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>comment</label>
    <input
      placeholder='comment...'
      value={comment.content}
      name='content'
      onChange={handleChange}
    />
    <button type='submit'>Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default CommentForm
