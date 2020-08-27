import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder='Enter a title'
      value={post.title}
      name='title'
      onChange={handleChange}
    /> <br />

    <label>content</label>
    <input
      placeholder='Content...'
      value={post.content}
      name='content'
      onChange={handleChange}
    />

    <label>Topic</label>
    <input
      placeholder='topic'
      value={post.topic}
      name='topic'
      onChange={handleChange}
    />

    <button type='submit'>Submit</button>
    <Link to={cancelPath}>
      <OutlineButton size="sm" variant="outline-dark">Cancel</OutlineButton>
    </Link>
  </form>
)

export default PostForm
