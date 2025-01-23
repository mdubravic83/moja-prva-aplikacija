import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class OdabirStatusa extends Component {
  handleStatusChange = (e) => {
    const { onStatusChange } = this.props;
    const { value, dataset } = e.target; // value je odabrani status, a dataset.index je indeks korisnika
    onStatusChange(dataset.index, value); // Pozivanje funkcije proslijeđene preko props-a
  };

  render() {
    const { korisnici, statusOpcije } = this.props;

    return (
      <div>
        <h3>Odabir statusa korisnika</h3>
        {korisnici.map((korisnik, index) => (
          <div key={index} className="mb-3">
            <label>
              {korisnik.ime} ({korisnik.godine} godina):
            </label>
            <select
              className="form-select"
              value={korisnik.status}
              onChange={this.handleStatusChange}
              data-index={index} // Dodajemo indeks korisnika za identifikaciju
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
    );
  }
}

export default OdabirStatusa;
