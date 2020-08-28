import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CommentForm from '../shared/CommentForm'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import { withRouter } from 'react-router'

class CommentCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      comment: {
        content: ''
      },
      created: false,
      postId: null
    }
  }

  handleChange = event => {
    event.persist()

    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }

      const editedComment = Object.assign({}, prevState.comment, updatedField)
      return { comment: editedComment }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/posts/${this.props.match.params.id}/comments`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: { comment: this.state.comment }
    })
      .then(res => this.setState({ created: true }))
      .catch(console.error)
  }

  render () {
    // destructure book to show in the form below, and createdId to redirect
    const { comment, created } = this.state
    const { handleChange, handleSubmit } = this

    // when the user hits submit to finish editing the book
    if (created) {
      // redirect to the show page (route)
      return <Redirect to={`/posts/${this.props.match.params.id}`} />
    }
    return (
      <div>
        <CommentForm
          comment={comment}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath='/'
        />
      </div>
    )
  }
}

export default withRouter(CommentCreate)
