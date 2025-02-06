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
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = "https://api.chucknorris.io/jokes/random";
const API_CATEGORIES = "https://api.chucknorris.io/jokes/categories";
const API_URL_CATEGORY = "https://api.chucknorris.io/jokes/random?category=";
const API_URL_QUERY = "https://api.chucknorris.io/jokes/search?query=";

function App() {
  const [joke, setJoke] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryJoke, setCategoryJoke] = useState(null);
  const [query, setQuery] = useState(""); 
  const [queryJoke, setQueryJoke] = useState(null);

  // Dohvati random šalu
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setJoke(data))
      .catch(error => console.error("GREŠKA!!!", error));
  }, []);

  // Dohvati kategorije
  useEffect(() => {
    fetch(API_CATEGORIES)
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error("GREŠKA!!!", error));
  }, []);

  // Dohvati šalu po kategoriji
  const fetchJokeByCategory = (category) => {
    fetch(`${API_URL_CATEGORY}${category}`)
      .then(response => response.json())
      .then(data => {
        setSelectedCategory(category);
        setCategoryJoke(data);
      })
      .catch(error => console.error("GREŠKA!!!", error));
  };

  // Dohvati šalu po query-u
  const fetchJokeByQuery = () => {
    if (!query) return;
    
    fetch(`${API_URL_QUERY}${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.result.length > 0) {
          setQueryJoke(data.result[0]); // Uzima prvu pronađenu šalu
        } else {
          setQueryJoke(null);
        }
      })
      .catch(error => console.error("GREŠKA!!!", error));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>CHUCK NORRIS ŠALE</h1>

      {joke ? (
        <div>
          <img src={joke.icon_url} alt="Chuck Norris" />
          <p>{joke.value}</p>
          <br /><br />
        </div>
      ) : (
        <p>Učitavanje...</p>
      )}

      <h3>Upiši neku ključnu riječ za pretragu šale:</h3>
      <div style={{ marginBottom: "20px" }}>
        <Form.Control
          type="text"
          placeholder="Npr. karate"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="primary" onClick={fetchJokeByQuery} style={{ marginTop: "10px" }}>
          Pretraži
        </Button>
      </div>

      {queryJoke ? (
  <div>
    <h3>Pronađena šala:</h3>
    <p>{queryJoke.value}</p>
  </div>
) : query && (
  <p style={{ color: "red", fontWeight: "bold" }}>Nema šale pod ovom ključnom riječi.</p>
)}

      <h2>Odaberi kategoriju:</h2>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedCategory ? selectedCategory : "Odaberi kategoriju"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categories.length > 0 ? (
            categories.map(category => (
              <Dropdown.Item key={category} onClick={() => fetchJokeByCategory(category)}>
                {category}
              </Dropdown.Item>
            ))
          ) : (
            <Dropdown.Item disabled>Učitavanje kategorija...</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>

      {categoryJoke && (
        <div style={{ marginTop: "20px" }}>
          <h3>Šala iz kategorije: {selectedCategory}</h3>
          <p>{categoryJoke.value}</p>
        </div>
      )}
    </div>
  );
}

export default App;
