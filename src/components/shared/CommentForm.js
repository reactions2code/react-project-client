import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const CommentForm = ({ comment, handleSubmit, handleChange, cancelPath }) => (
<<<<<<< HEAD
  <form onSubmit={handleSubmit}>
    <label>comment</label>{' '}
    <input
      placeholder='comment...'
      value={comment.content}
      name='content'
      onChange={handleChange}
    />{' '}
    <OutlineButton variant="outline-success" type="submit" size="sm">Submit</OutlineButton>{' '}
    <Link to={cancelPath}>
      <OutlineButton variant="outline-dark" size="sm">Cancel</OutlineButton>
    </Link>
  </form>
=======
  <div className='long'>
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
  </div>
>>>>>>> development
)

export default CommentForm
