import React from 'react';
import ConditionalRendering from './ConditionalRendering';

function App() {
  // const number = 5; 

  return (
    <div>
      <h1>Conditional Rendering Primjer</h1>
      <ConditionalRendering number={4} />


      <ConditionalRendering number={15} />
      <ConditionalRendering number={8} />
      <ConditionalRendering number={undefined} />

    </div>
  );
}

export default App;
