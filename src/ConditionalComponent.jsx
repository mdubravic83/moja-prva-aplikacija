import React from "react";

const UvjetiKomponent = ({ ime, godine, grad }) => {
  return (
    <div>
      <p>Ime: {ime}</p>
      <p>Godine: {godine}</p>
      <p>Grad: {grad}</p>
    </div>
  );
};

export default UvjetiKomponent;
