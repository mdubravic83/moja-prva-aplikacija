// Izracun.jsx
import React, { useState } from 'react';

function Izracun() {
  const [broj1, setBroj1] = useState('');
  const [broj2, setBroj2] = useState('');
  const [rezultati, setRezultati] = useState(null);

  const handleIzracun = () => {
    const num1 = parseFloat(broj1);
    const num2 = parseFloat(broj2);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Molimo unesite važeće brojeve.');
      return;
    }

    const zbroj = num1 + num2;
    const razlika = num1 - num2;
    const proizvod = num1 * num2;
    const kolicnik = num2 !== 0 ? num1 / num2 : 'Nema dijeljenja s nulom';

    setRezultati({ zbroj, razlika, proizvod, kolicnik });
  };

  return (
    <div>
      <h2>Izračun</h2>
      <input
        type="text"
        placeholder="Unesite prvi broj"
        value={broj1}
        onChange={(e) => setBroj1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Unesite drugi broj"
        value={broj2}
        onChange={(e) => setBroj2(e.target.value)}
      />
      <button onClick={handleIzracun}>Izračunaj</button>

      {rezultati && (
        <div>
          <h3>Rezultati:</h3>
          <p>Zbroj: {rezultati.zbroj}</p>
          <p>Razlika: {rezultati.razlika}</p>
          <p>Proizvod: {rezultati.proizvod}</p>
          <p>Količnik: {rezultati.kolicnik}</p>
        </div>
      )}
    </div>
  );
}

export default Izracun;
