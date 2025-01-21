import React from "react";
import Form from 'react-bootstrap/Form';

function OdabirStatusa() {
  return (
    <Form.Select aria-label="odabir statusa">
      <option>Odabir statusa</option>
      <option value="1">Hladan lead</option>
      <option value="2">Zainteresiran lead</option>
      <option value="3">OPotencijalni klijent</option>
      <option value="4">Klijent</option>      
    </Form.Select>
  );
}


export default OdabirStatusa;
