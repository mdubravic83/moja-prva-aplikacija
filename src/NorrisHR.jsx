// import React, { useEffect, useState } from "react";

// const API_URL = "https://api.chucknorris.io/jokes/random";
// const API_URL_CATEGORY = "https://api.chucknorris.io/jokes/random?category="

// function App() {
//   const [data, setData] = useState(null);
//   const [dataCategory, setDataCategory] = useState(null);


//   useEffect(() => {
//     fetch(API_URL)
//       .then(odgovor => odgovor.json())  
//       .then(data => setData(data))  
//       .catch(error => console.error("GREŠKA!!!", error));
//   }, []); 

//   useEffect(() => {
//     fetch(API_URL_CATEGORY)
//       .then(odgovor => odgovor.json())  
//       .then(dataCategory => setDataCategory(dataCategory))  
//       .catch(error => console.error("GREŠKA!!!", error));
//   }, []); 


//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>CHUCK NORRIS ŠALE</h1>
//       {data ? (
//         <div>
//           <img src={data.icon_url} />
//           <p>{data.value}</p> <br/><br/>

//         </div>



//       ) : (
//         <p>Učitavanje...</p>
//       )}


// {dataCategory ? (
//         <div>
//           <p>Odaberi neku od kategorija </p>
//           <li>{dataCategory+"animal"}</li>
//         </div>



//       ) : (
//         <p>Učitavanje...</p>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from "react";

const API_URL = "https://api.chucknorris.io/jokes/random";
const API_CATEGORIES = "https://api.chucknorris.io/jokes/categories";
const API_URL_CATEGORY = "https://api.chucknorris.io/jokes/random?category=";

function App() {
  const [sala, setSala] = useState(null); //Ovo koristim za prikaz random šale
  const [kategorije, setKategorije] = useState([]); 
  const [selectedCategory, setOdabraneKategorije] = useState(null);
  const [salaPoKategoriji, setSalePoKategoriji] = useState(null);

  // Dohvati random šalu
  useEffect(() => {
    fetch(API_URL)
      .then(odgovor => odgovor.json())
      .then(data => setSala(data))
      .catch(error => console.error("GREŠKA!!!", error));
  }, []);

  // Dohvati sve kategorije
  useEffect(() => {
    fetch(API_CATEGORIES)
      .then(response => response.json())
      .then(data => setKategorije(data))
      .catch(error => console.error("GREŠKA!!!", error));
  }, []);

  const fetchSalePoKategoriji = (kategorije) => {
    fetch(`${API_URL_CATEGORY}${category}`)
      .then(response => response.json())
      .then(data => {
        setSelectedCategory(kategorije);
        setCategoryJoke(data);
      })
      .catch(error => console.error("GREŠKA!!!", error));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>CHUCK NORRIS ŠALE</h1>

      {/* Prikaz random šale */}
      {sala ? (
        <div>
          <img src={sala.icon_url} alt="Chuck Norris" />
          <p>{sala.value}</p>
          <br /><br />
        </div>
      ) : (
        <p>Učitavanje...</p>
      )}

      {/* Prikaz kategorija */}
      <h2>Odaberi kategoriju:</h2>
      {kategorije.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {kategorije.map(category => (
            <li
              key={category}
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
                marginBottom: "5px",
              }}
              onClick={() => fetchJokeByCategory(category)}
            >
              {kategorije}
            </li>
          ))}
        </ul>
      ) : (
        <p>Učitavanje kategorija...</p>
      )}

      {/* Prikaz šale iz odabrane kategorije */}
      {categoryJoke && (
        <div>
          <h3>Šala iz kategorije: {selectedCategory}</h3>
          <p>{categoryJoke.value}</p>
        </div>
      )}
    </div>
  );
}

export default App;
