import React from 'react';

function ConditionalRendering({ number }) {
  if (number === undefined) {
    return null;
  }

  if (number > 10) {
    return <p>Broj je veći od 10.</p>;
  } else {
    return <p>Broj je manji ili jednak 10.</p>;
  }
}

export default ConditionalRendering;
