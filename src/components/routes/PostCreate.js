import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PostForm from '../shared/PostForm'
import apiUrl from '../../apiConfig'
import axios from 'axios'

class PostCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {
        title: '',
        content: '',
        topic: ''
      },
      createdId: null
    }
  }

  handleChange = event => {
    event.persist()

    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }

      const editedPost = Object.assign({}, prevState.post, updatedField)
      return { post: editedPost }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.props.user)
    axios({
      url: `${apiUrl}/posts`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { post: this.state.post }
    })
      .then(res => this.setState({ createdId: res.data.post._id }))
      .catch(console.error)
  }

  render () {
    // destructure book to show in the form below, and createdId to redirect
    const { post, createdId } = this.state
    const { handleChange, handleSubmit } = this

    // when the user hits submit to finish editing the book
    if (createdId) {
      // redirect to the show page (route)
      return <Redirect to={`/posts/${createdId}`} />
    }

    return (
      <div>
        <PostForm
          post={post}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath='/'
        />
      </div>
    )
  }
}

export default PostCreate
