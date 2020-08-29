import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'
import messages from '../AutoDismissAlert/messages'

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
    axios({
      url: `${apiUrl}/posts`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ posts: res.data.posts }))
      // .then(res => console.log(res))
      .catch(res => this.props.msgAlert({
        heading: 'Post Index Failed',
        message: messages.postIndexFailure,
        variant: 'danger'
      }))
  }

  render () {
    const posts = null
    if (this.state.posts) {
      const posts = this.state.posts.map(post => (
        <div key={post._id} className='posts'>
          <Link to={`/posts/${post._id}`}>
            {post.title}
          </Link>
        </div>
      ))
      return posts
    }
    return (
      <div className='long'>
        <h1>Posts</h1>
        {posts}
      </div>
    )
  }
}

export default withRouter(Posts)
