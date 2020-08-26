import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const CommentIndex = ({ content, deleteComment, editComment }) => (
  <div>
    {content} <br/>
    <ButtonGroup size="sm" aria-label="Basic example">
      <Button onClick={editComment} variant="outline-warning">Edit</Button>
      <Button onClick={deleteComment} variant="outline-danger">Delete</Button>
    </ButtonGroup>
  </div>
)

export default CommentIndex
