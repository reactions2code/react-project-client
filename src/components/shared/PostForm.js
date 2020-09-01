import React from 'react'
import { Link } from 'react-router-dom'
import OutlineButton from './OutlineButton.js'

const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => (
  <div className='long'>
    <form onSubmit={handleSubmit}>
      <label>Topic:</label><br/>
      <input
        placeholder='Enter a topic'
        value={post.topic}
        required
        name='topic'
        onChange={handleChange}
      /><br/>

      <label>Title:</label><br/>
      <input
        placeholder='Enter a title'
        value={post.title}
        required
        name='title'
        onChange={handleChange}
      /><br/>

      <label>Content:</label><br/>
      <input
        placeholder='Content...'
        value={post.content}
        required
        name='content'
        onChange={handleChange}
      /><br/>
      <OutlineButton size="sm" variant="outline-success" type="submit">Submit</OutlineButton>
      <Link to={cancelPath}>
        <OutlineButton size="sm" variant="outline-dark">Cancel</OutlineButton>
      </Link>
    </form>
  </div>
)

export default PostForm
