// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const myArray = ['apple', 'banana', 'orange'];

// const MapComponent = () => {
//   return (
//     <div className="d-flex justify-content-start">
//     {myArray.map((item, index) => (
//       <Card key={index} className="me-3" style={{ width: '30%' }}>
//         <Card.Body>
//           <Card.Title>{item}</Card.Title>
//         </Card.Body>
//       </Card>
//     ))}
//   </div>
//   );
// };

// export default MapComponent;
import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapComponent = ({ korisnici, setKorisnici, color, generateColor, promijeniIme }) => {
  
  const povecajGodine = (index) => {
    const noviKorisnici = [...korisnici];
    noviKorisnici[index].godine += 1;
    setKorisnici(noviKorisnici);
  };

  return (
    <div className="d-flex justify-content-start">
      {korisnici.map((korisnik, index) => (
        <Card key={index} className="me-3" style={{ width: '30%' }}>
          <Card.Body>
            <Card.Title>
              <input
                type="text"
                value={korisnik.ime}
                onChange={(e) => promijeniIme(index, e.target.value)}
              />
            </Card.Title>
            <p>{korisnik.godine} godina</p>
            <p>Grad: {korisnik.grad}</p>
            <button
              style={{ backgroundColor: color }}
              className="buttonStyle"
              onClick={() => {
                povecajGodine(index);
                generateColor();
              }}
            >
              Povećaj godine za {korisnik.ime}
            </button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MapComponent;
