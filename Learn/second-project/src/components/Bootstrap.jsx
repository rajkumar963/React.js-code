import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
function Bootstrap() {
  return (
    <div>
      <Alert variant="danger">This is a Bootstrap alert!</Alert>
      <Alert variant="success">This is a Bootstrap alert!</Alert>
      <Alert variant="warning">This is a Bootstrap alert!</Alert>
       <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
    </div>
  )
}

export default Bootstrap