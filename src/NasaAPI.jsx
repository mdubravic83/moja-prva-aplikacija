import React, { useEffect, useState } from "react";

const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(odgovor => odgovor.json())  
      .then(data => setData(data))  
      .catch(error => console.error("GREŠKA!!!", error));
  }, []); 

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>NASINA SLIKA DANA</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <img src={data.url} alt={data.title} style={{ maxWidth: "100%", height: "auto" }} />
          <p>{data.explanation}</p>
        </div>
      ) : (
        <p>Učitavanje...</p>
      )}
    </div>
  );
}

export default App;