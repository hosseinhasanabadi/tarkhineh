import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BranchPage.css'
function BranchPageCard(props) {
  return (
    <Card className='col-12 col-md-4 col-lg-3 img-hover' >
    <Card.Img variant="top" src={props.Img}  />
    <Card.Body>
      <Card.Title>{props.Title}</Card.Title>
      <Card.Text>
        {props.subTitle}
      </Card.Text>
      <Button variant="primary">{props.btn}</Button>
    </Card.Body>
  </Card>
  )
}

export default BranchPageCard
