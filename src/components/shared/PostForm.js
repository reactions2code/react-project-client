import React from 'react'
import { Link } from 'react-router-dom'

const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder='Enter a title'
      value={post.title}
      name='title'
      onChange={handleChange}
    />

    <label>content</label>
    <input
      placeholder='content...'
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
      <button>Cancel</button>
    </Link>
  </form>
)

export default PostForm
