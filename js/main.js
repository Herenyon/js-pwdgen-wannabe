// costante per la richiesta del nome 
const nome = prompt('inserisci il tuo nome');
// costante per la richiesta del cognome 
const cognome = prompt('inserisci il tuo cognome');
// costante per la richiesta del colore preferito 
const colorePreferito = prompt('inserisci il tuo colore preferito');
// costante per unire insieme le costanti chiamate sopra 
const password = nome + cognome + colorePreferito + 89;
// stampa della costante password in console e nella pagina html 
console.log(password);
document.getElementById("demo").innerHTML = password;