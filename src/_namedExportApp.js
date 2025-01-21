import logo from './logo.svg';
import './App.css';
import randomstring from 'randomstring';
import '/namedExportApp';
import '/defaultApp';




function izracun() {

  const broj1 = prompt("Unesite prvi broj:");
  const broj2 = prompt("Unesite drugi broj:");

  // Pretvorba unosa u brojeve
  const num1 = parseFloat(broj1);
  const num2 = parseFloat(broj2);

  // Provjera jesu li uneseni podaci validni brojevi
  if (isNaN(num1) || isNaN(num2)) {
    alert("Molimo unesite važeće brojeve.");
  } else {
    // Izračun
    const zbroj = num1 + num2;
    const razlika = num1 - num2;
    const proizvod = num1 * num2;
    const kolicnik = num2 !== 0 ? num1 / num2 : "Nema dijeljenja s nulom";  
  }  

}

export default izracun;
