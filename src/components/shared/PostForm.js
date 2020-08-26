import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Topic</label>
    <input
      placeholder='Enter a topic'
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
    <Button size="sm" variant="outline-success" type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button size="sm" variant="outline-dark">Cancel</Button>
    </Link>
  </form>
)

export default PostForm
