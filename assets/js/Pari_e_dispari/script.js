/* **Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


//utente sceglie pari o dispari
var scelta = prompt("Scegli tra pari o dispari");
//utente sceglie un numero da 1 a 5
var numeroScelto = parseInt(prompt("Scegli un numero tra 1 e 5"));
//numero random 
var msg = "";

document.getElementById('pal').innerHTML= pariDispari(numeroScelto, scelta);

function pariDispari(numero, paridis){
  var rdm = Math.floor(Math.random() * ((5 + 1) - 1)  ) + 1;
  var totale = rdm + numero;
  var msg = "";
  if (totale%2 == 0 && paridis == "pari"){
    msg = "Il risultato è " + totale + ". Complimenti hai vinto"
  }
  else if (totale%2 == 0 && paridis == "dispari"){
    msg = "Il risultato è " + totale + ". Mi dispiace hai perso"
  }
  else if (totale%2 != 0 && paridis == "dispari"){
    msg= "Il risultato è " + totale + ". Complimenti hai vinto";
  }
  else{
    msg = "Il risultato è " + totale + ". Mi dispiace hai perso";
  }
  return msg;
}