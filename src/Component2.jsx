import React, { Component } from "react";

class Component2 extends Component {
  render() {
    const { ime, godine, status } = this.props;
    return (
      <div>
        <p>Ime: {ime}</p>
        <p>Godine: {godine}</p>
        <p>Status: {status}</p>

      </div>
    );
  }
}

export default Component2;
