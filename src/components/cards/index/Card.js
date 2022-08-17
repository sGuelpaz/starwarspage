import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cardo({title, image, text }) {
  return (
    <Card
          bg='black'
          key='dark'
          text='light'
          style={{ width: '18rem' }}
          className="m-4"
        >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
        <div className="text-center"><Button className="m-auto" variant="warning">Ir</Button></div>
      </Card.Body>
    </Card>

  );
}

export default Cardo;