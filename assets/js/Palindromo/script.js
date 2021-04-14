/* **Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


var parola = prompt("Inserisci una parola");

document.getElementById('pal').innerHTML= mioPalindromo(parola);

function mioPalindromo(nome){
  var palindromo = parola.split('').reverse().join('');
  risposta = "";
  if (nome === palindromo){
    risposta = nome + " è un palindromo";
  }
  else{
    risposta = nome + " non è un palindromo";
  }
  return risposta;
}