import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const myArray = ['apple', 'banana', 'orange'];

const MapComponent = () => {
  return (
    <div className="d-flex justify-content-start">
    {myArray.map((item, index) => (
      <Card key={index} className="me-3" style={{ width: '30%' }}>
        <Card.Body>
          <Card.Title>{item}</Card.Title>
        </Card.Body>
      </Card>
    ))}
  </div>
  );
};

export default MapComponent;
