// import { useState } from "react";
// import Component3 from "./Component3";
// import MapComponent from "./MapComponent";
// import useGenerateRandomColor from "./useGenerateRandomColor";
// import Counter from "./Counter"; 

// function App() {

//   //poziv funkcije za promjenu boje gumba
//   const { color, generateColor } = useGenerateRandomColor();

//   const [korisnici, setKorisnici] = useState([
//     { ime: "Marko", godine: 25, grad: "Zagreb" },
//     { ime: "Ana", godine: 30, grad: "Opatija" },
//   ]);

//   const [poruka] = useState("Dobrodošli u Algebru!");

//   // Funkcija za povećanje godina
//   const povecajGodine = (index) => {
//     const noviKorisnici = [...korisnici];
//     noviKorisnici[index].godine += 1;
//     setKorisnici(noviKorisnici);
//   };

//   // Funkcija za promjenu imena
//   const promijeniIme = (index, novoIme) => {
//     const noviKorisnici = [...korisnici];
//     noviKorisnici[index].ime = novoIme;
//     setKorisnici(noviKorisnici);
//   };

//   return (
//     <div>
//       {korisnici.map((korisnik, index) => (

// <MapComponent 

//         <div key={index}>
//           <input
//             type="text"
//             value={korisnik.ime}
//             onChange={(e) => promijeniIme(index, e.target.value)}
//           />
//           <p>
//             {korisnik.ime} ima {korisnik.godine} godina i živi u {korisnik.grad}.
//           </p>
//           <button
//             style={{ backgroundColor: color }}
//             className="buttonStyle"
//             onClick={() => {
//               povecajGodine(index); // Prva funkcija
//               generateColor(); // Druga funkcija
//             }}
//           >
//             Povećaj godine za {korisnik.ime}
//           </button>
//         </div>

// />
//       ))}
//       <Component3 poruka={poruka} />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import MapComponent from "./MapComponent";
import useGenerateRandomColor from "./useGenerateRandomColor";

function App() {
  const { color, generateColor } = useGenerateRandomColor();

  const [korisnici, setKorisnici] = useState([
    { ime: "Marko", godine: 25, grad: "Zagreb" },
    { ime: "Ana", godine: 30, grad: "Opatija" },
    { ime: "Ivica", godine: 32, grad: "Opatija" },

    { ime: "Šime", godine: 30, grad: "Opatija" },

    { ime: "Jruica", godine: 30, grad: "Opatija" },



  ]);

  const [poruka] = useState("Dobrodošli u Algebru!");

  const promijeniIme = (index, novoIme) => {
    const noviKorisnici = [...korisnici];
    noviKorisnici[index].ime = novoIme;
    setKorisnici(noviKorisnici);
  };

  return (
    <div>
      <MapComponent
        korisnici={korisnici}
        setKorisnici={setKorisnici}
        color={color}
        generateColor={generateColor}
        promijeniIme={promijeniIme}
      />
    </div>
  );
}

export default App;
