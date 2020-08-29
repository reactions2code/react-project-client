import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
<<<<<<< HEAD
=======
import CommentIndex from './CommentIndex'
<<<<<<< HEAD
>>>>>>> development

// import the api's url
=======
import OutlineButton from '../shared/OutlineButton.js'
>>>>>>> lastHome
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'

class Post extends Component {
  constructor (props) {
    // this makes sure that `this.props` is set in the constructor
    super(props)

    this.state = {
      // Initially, our book state will be null, until the API request finishes
      post: null,
      // initially this book has not been deleted yet
      deleted: false
<<<<<<< HEAD
    }
  }

  // runs when the component appears (is created and inserted into DOM)
  componentDidMount () {
    // make a request to get the book, with the current routes'id
=======

    }
  }

  componentDidMount () {
>>>>>>> development
    axios({
      url: `${apiUrl}/posts/${this.props.match.params.id}`,
      method: 'get',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  destroyComment = () => {
=======
  destroyComment = (commentId) => {
>>>>>>> lastHome
    axios({
      url: `${apiUrl}/posts/${this.props.match.params.id}/comments/${commentId}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(() => {
        return axios({
          url: `${apiUrl}/posts/${this.props.match.params.id}`,
          method: 'get',
          headers: {
            'Authorization': `Bearer ${this.props.user.token}`
          }
        })
      })
      .then(res => this.setState({ post: res.data.post }))
      .catch(console.error)
  }
  editComment = (commentId) => {
    const newPath = `/posts/${this.props.match.params.id}/comments/${commentId}/edit`
    this.props.history.push(newPath)
  }
>>>>>>> development

  render () {
    const { post, deleted } = this.state

    if (!post) {
      return <p>Loading...</p>
    }

    // if the deleted state is true
    if (deleted) {
      // redirect to the home page
      return <Redirect to={{
        pathname: '/posts',
        state: { message: 'Deleted post successfully' }
      }} />
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======

>>>>>>> lastHome
    const commentHtml = (
      <div>
        {this.state.post.comments.map(comment => (
          <CommentIndex
            key={comment._id}
            content={comment.content}
            deleteComment={() => this.destroyComment(comment._id)}
            editComment={() => this.editComment(comment._id)}
          />
        ))}
      </div>
    )
<<<<<<< HEAD
    console.log(this.state.post.comments)
>>>>>>> development
    return (
      <div>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <button onClick={this.destroyPost}>Delete Post</button>
        {/* Add a link to the edit book route when you click the edit button */}
        <Link to={`/posts/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
<<<<<<< HEAD
        <Link to='/posts'>Back to all posts</Link>
=======
=======
    return (
      <div className='long'>
        <h3>Post:</h3>
        <div className='post'>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <Link to={`/posts/${this.props.match.params.id}/edit`}>
            <OutlineButton variant="outline-info" size="size">Edit</OutlineButton>
          </Link>
          <Link to={`/posts/${this.props.match.params.id}/comments`}>
            <OutlineButton variant="outline-info" size="sm">Comment</OutlineButton>
          </Link>
          <OutlineButton variant= "outline-danger" size="sm" onClick={this.destroyPost}>Delete Post</OutlineButton>
        </div>
        <h3>Comments:</h3>
>>>>>>> lastHome
        {commentHtml}
>>>>>>> development
      </div>
    )
  }
}

export default withRouter(Post)
