import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label> <br />
    <input
      placeholder='Enter a title'
      value={post.title}
      name='title'
      onChange={handleChange}
    /> <br />

    <label>content</label> <br />
    <input
      placeholder='Content...'
      value={post.content}
      name='content'
      onChange={handleChange}
    /> <br />

    <label>Topic</label> <br />
    <input
      placeholder='topic'
      value={post.topic}
      name='topic'
      onChange={handleChange}
    /> <br />

    <button type='submit'>Submit</button>
    <Link to={cancelPath}>
      <OutlineButton size="sm" variant="outline-dark">Cancel</OutlineButton>
    </Link>
  </form>
)

export default PostForm
