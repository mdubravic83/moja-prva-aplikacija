import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import OdabirStatusa from "./OdabirStatusa";

class App extends Component {
  constructor() {
    super();
    this.state = {
      korisnici: [
        { ime: "Marko", godine: 25, status: "hladan lead" },
        { ime: "Ana", godine: 30, status: "zainteresiran lead" },
        { ime: "Ivan", godine: 25, status: "potencijalni klijent" },
        { ime: "Ivana", godine: 30, status: "hladan lead" },
        { ime: "Djuro", godine: 25, status: "klijent" },
        { ime: "Perica", godine: 30, status: "" },
        { ime: "Stipe", godine: 25, status: "klijent" },
        { ime: "Jure", godine: 30, status: "hladan lead" },
        { ime: "Davor", godine: 25, status: "potencijalni klijent" },
        { ime: "Nikola", godine: 30, status: "" },
      ],
      statusOpcije: ["hladan lead", "zainteresiran lead", "potencijalni klijent", "klijent", ""],
    };
  }
    // Funkcija za ažuriranje statusa korisnika
    handleStatusChange = (index, noviStatus) => {
      this.setState((prevState) => {
        const korisnici = [...prevState.korisnici];
        korisnici[index].status = noviStatus;
        return { korisnici };
      });
    };

     // Funkcija za sortiranje korisnika
  const sortirajPoStatusu = () => {
    const sortiraniKorisnici = [...korisnici].sort((a, b) =>
      a.status.localeCompare(b.status)
    );
    setKorisnici(sortiraniKorisnici);
  };
  
    render() {
      const { korisnici, statusOpcije } = this.state;
  
      return (
        <div className="container mt-4">
          <h3 className="mb-4">Lista korisnika s opcijom za promjenu statusa</h3>
          <div className="list-group">
            {korisnici.map((korisnik, index) => (
              <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
  <strong>{korisnik.ime}</strong> ({korisnik.godine} godina) - Status:{" "}
  <span
    className={`badge ${
      korisnik.status === "klijent" ? "bg-success" : "bg-secondary"
    }`}
  >
    {korisnik.status || "Nedefiniran"}
  </span>
</div>

                <select
                  className="form-select w-auto"
                  value={korisnik.status}
                  onChange={(e) => this.handleStatusChange(index, e.target.value)}
                >
                  {statusOpcije.map((status, i) => (
                    <option key={i} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
  
  export default App;