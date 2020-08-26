import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const CommentForm = ({ comment, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>comment</label>
    <input
      placeholder='comment...'
      value={comment.content}
      name='content'
      onChange={handleChange}
    />
    <Button variant="success" type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button variant="dark">Cancel</Button>
    </Link>
  </form>
)

export default CommentForm
