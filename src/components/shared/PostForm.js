import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Topic</label>
    <input
      placeholder='topic'
      value={post.topic}
      name='topic'
      onChange={handleChange}
    />
    <label>Title</label>
    <input
      placeholder='Enter a title'
      value={post.title}
      name='title'
      onChange={handleChange}
    />
    <label>content</label>
    <input
      placeholder='Content...'
      value={post.content}
      name='content'
      onChange={handleChange}
    />
    <OutlineButton type='submit' variant="outline-success" size="sm">Submit</OutlineButton>
    <Link to={cancelPath}>
      <OutlineButton size="sm" variant="outline-dark" >Cancel</OutlineButton>
    </Link>
  </form>
)

export default PostForm
