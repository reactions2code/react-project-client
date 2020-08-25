import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

// import the api's url
import apiUrl from '../../apiConfig'

// Import axios so we can make HTTP requests
import axios from 'axios'

class Post extends Component {
  constructor (props) {
    // this makes sure that `this.props` is set in the constructor
    super(props)

    this.state = {
      // Initially, our book state will be null, until the API request finishes
      post: null,
      // initially this book has not been deleted yet
      deleted: false
    }
  }

  // runs when the component appears (is created and inserted into DOM)
  componentDidMount () {
    // make a request to get the book, with the current routes'id
    axios({
      url: `${apiUrl}/posts/${this.props.match.params.id}`,
      method: 'get',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      // set the `book` state to the `book` data we got back from the response (res.data.book)
      .then(res => this.setState({ post: res.data.post }))
      .catch(console.error)
  }

  destroyPost = () => {
    axios({
      url: `${apiUrl}/posts/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      // update their `deleted` state to be `true`
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    // destructure our book property out of state
    const { post, deleted } = this.state

    // if we don't have a book (book is null)
    if (!post) {
      return <p>Loading...</p>
    }

    // if the deleted state is true
    if (deleted) {
      // redirect to the home page
      return <Redirect to={{
        // Redirect to the home page ('/')
        pathname: '/posts',
        // Pass along a message, in state, that we can show
        state: { message: 'Deleted post successfully' }
      }} />
    }

    return (
      <div>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <button onClick={this.destroyPost}>Delete Post</button>
        {/* Add a link to the edit book route when you click the edit button */}
        <Link to={`/posts/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to='/posts'>Back to all posts</Link>
      </div>
    )
  }
}

export default Post
