import { useState } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


const Forma = () => {
  const [content, setContent] = useState(""); // Trenutni unos
  const [poslano, setPoslano] = useState(""); // Zadnje spremljeno, ali skriveno

  const handleSubmit = (e) => { 
    e.preventDefault();
    setPoslano(content); // Samo sprema unos, ali ne prikazuje odmah
    setContent(""); // Po želji, možeš resetirati textarea
  };

  const handlePocetnoStanje = () => {
    // Kada klikneš, ispisuje zadnje spremljeni tekst
    alert(`Zadnje spremljeno: ${poslano}`); // Po želji, može ići u <p> umjesto alert-a
  };

  return (
    <div className="form-group">

      <form onSubmit={handleSubmit}>
        
        <label>Sadržaj forme</label>
        <small id="emailHelp" className="form-text text-muted">        <textarea
        
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        </small>
        <button type="submit" className="btn btn-primary">Potvrdi unos</button>
      </form>

      {/* Dodatni gumb "Početno stanje" */}
      <button onClick={handlePocetnoStanje}>Početno stanje</button>

      {/* Tekst se prikazuje samo ako kliknemo "Početno stanje" */}
      {poslano && <p>Posljednje spremljeno: <strong>{poslano}</strong></p>}
    </div>
  );
};

export default Forma;
