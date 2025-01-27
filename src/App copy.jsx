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

  // const brojacGodina [this.godine, setGodine]= this.state();

  povecajGodine = (index) => {
    const noviKorisnici = [...this.state.korisnici];
    noviKorisnici[index].godine += 1; // Povećaj godine za korisnika na zadatom indeksu
    this.setState({ korisnici: noviKorisnici });
  };


  render() {
    const { korisnici, poruka  } = this.state;


    // return (
    //   <div>
    //     {/* Prosljeđivanje props-a */}

    //     <div>

    //       <button onClick={() => setGodine(this.godine+1)}>Povećaj za 1 godinu</button>
    //     </div>
    //     <Component1 ime={korisnici[0].ime} godine={korisnici[0].godine} grad={korisnici[0].grad} />
    //     <Component2 ime={korisnici[1].ime} godine={korisnici[1].godine} grad={korisnici[1].grad}>
          
    //        <Component2 />
    //     <Component3 poruka={this.state.poruka} />
    //     <MapComponent/>

        


        
    //   </div>
    // );


    return (
      <div>
        <div>
          <button onClick={() => this.povecajGodine(0)}>Povećaj Marku godine</button>
          <button onClick={() => this.povecajGodine(1)}>Povećaj Ani godine</button>
        </div>
        <Component1
          ime={korisnici[0].ime}
          godine={korisnici[0].godine}
          grad={korisnici[0].grad}
        />
        <Component2
          ime={korisnici[1].ime}
          godine={korisnici[1].godine}
          grad={korisnici[1].grad}
        />
        <Component3 poruka={poruka} />
        <MapComponent />
      </div>
    );
  }
}

export default App;
