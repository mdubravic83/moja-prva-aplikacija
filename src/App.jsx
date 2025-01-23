import React, { Component } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import MapComponent from "./MapComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      korisnici: [
        { ime: "Marko", godine: 25 , grad: "Zagreb" },
        { ime: "Ana", godine: 30 , grad: "Opatija" }
      ],

      poruka: "Dobrodošli u Algebru!"

    };
  }

  render() {
    const { korisnici, poruka  } = this.state;


    return (
      <div>
        {/* Prosljeđivanje props-a */}
        <Component1 ime={korisnici[0].ime} godine={korisnici[0].godine} grad={korisnici[0].grad} />
        <Component2 ime={korisnici[1].ime} godine={korisnici[1].godine} grad={korisnici[1].grad} />
        <Component3 poruka={this.state.poruka} />
        <MapComponent/>

        


        
      </div>
    );
  }
}

export default App;
