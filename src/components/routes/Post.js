import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import CommentIndex from './CommentIndex'
import Button from 'react-bootstrap/Button'

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

  componentDidMount () {
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
  destroyComment = () => {
    axios({
      url: `${apiUrl}/posts/${this.props.match.params.id}/comments/${this.state.post.comments._id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(<Redirect to={{
        pathname: `/posts/${this.props.match.params.id}`
      }} />)
      .catch(console.error)
  }
  editComment = () => {
    axios({
      url: `${apiUrl}/posts/${this.props.match.params.id}/comments/${this.state.post.comments._id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(<Redirect to={{
        pathname: `/posts/${this.props.match.params.id}`
      }} />)
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
    const commentHtml = (
      <div>
        {this.state.post.comments.map(comment => (
          <CommentIndex
            key={comment._id}
            content={comment.content}
            deleteComment={this.destroyComment}
            editComment={this.editComment}
          />
        ))}
      </div>
    )
    console.log(this.state.post.comments)
    return (
      <div>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <Button variant= "outline-danger" onClick={this.destroyPost}>Delete Post</Button>
        {/* Add a link to the edit book route when you click the edit button */}
        <Link to={`/posts/${this.props.match.params.id}/edit`}>
          <Button variant="outline-warning">Edit</Button>
        </Link>
        {commentHtml}
      </div>
    )
  }
}

export default Post
