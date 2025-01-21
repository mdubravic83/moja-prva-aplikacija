import React from 'react';
function Komp1() {

  const varijabla1 = "Neki tekst jedan";
  const varijabla2 = "Neki tekst dva";
  return (
    <div className="App">
      <h1>Dobrodošli u aplikacijui vjezba 5.6</h1>        
      <p>   Ovo je neki tekst </p>
      <p>   Ovo je neki tekst + varijabla koja sadrzi tekst:  {varijabla1}</p>
      <p>   Ovo je neki tekst + obje varijabla koja sadrzi tekst:  {varijabla1} , {varijabla2}</p>
    </div>
  );
}

export default App;
