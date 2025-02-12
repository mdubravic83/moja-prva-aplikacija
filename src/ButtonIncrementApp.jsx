import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






function App({ count, increment, decrement, reset }) {

  //funckije koje rade povecanje , smanjenje i reset kada se stisnu tipke
  const handleKeyPress = (e) => {
    if (e.key === "+") {
      (increment());
    }
    else if(e.key === "-") {       
      (decrement());
    }
    else if(e.key === " ") {    
      e.preventDefault();  
      (reset());
    }
  };

  // Ovaj useEfect sluzi za "slusanje" listinera za keydown tj kada se stisne na tipku
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup listenera kad komponenta nestane
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
          //korištenje bootstrapa kako bi se stilizirao ispis

      <Container>
      <Row>
        <Col><h1>Redux Counter App</h1><br></br> <h1 style={{ color: count < 0 ? "red" : "black" }}>{count}</h1></Col>
      </Row>
      <Row md={4}>
        <Col>      <Button variant="primary" onClick={increment}>Increment</Button>
        </Col>
        <Col xs={6}>      <Button variant="info" onClick={decrement}>Decrement</Button>
        </Col>
        <Col>      <Button variant="secondary" onClick={reset}>Reset</Button>
        </Col>
      </Row>
    </Container>

  );
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);