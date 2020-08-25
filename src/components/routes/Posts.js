import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'

// This will be our Books Index component (show all books)
class Posts extends Component {
  constructor (props) {
    super(props)

    // setup our initial state
    this.state = {
      // we have zero books, until our API request has finished
      posts: []
    }
  }

  // this is called whenever our component is created and inserted
  // into the DOM (first appears)
  componentDidMount () {
    // make a GET request for all of the books
    console.log(this.state.posts)
    axios({
      url: `${apiUrl}/posts`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ posts: res.data.posts }))
      // .then(res => console.log(res))
      .catch(console.error)
  }

  render () {
    const posts = null
    if (this.state.posts) {
      const posts = this.state.posts.map(post => (
        <li key={post._id}>
          <Link to={`/posts/${post._id}`}>
            {post.title}
          </Link>
        </li>
      ))
      return posts
    }
    return (
      <div>
        <h4>Posts</h4>
        <ul>
          {posts}
        </ul>
      </div>
    )
  }
}

export default Posts
