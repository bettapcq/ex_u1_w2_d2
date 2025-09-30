/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 15;
const num2 = 20;

if (num1 > num2) {
  console.log('num1 è maggiore');
} else {
  console.log('num2 è maggiore');
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num3 = 7;

if (num3 !== 5) {
  console.log('not equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num4 = 15;

if (num4 % 5 === 0) {
  console.log('divisibile per 5');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num5 = 6;
const num6 = 2;

if (num5 === 8 || num5 + num6 === 8) {
  console.log('num5, o la somma di num5 + num6, è uguale a 8');
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let totalShoppingCart = 30;
let shippingPrice = 10;

if (totalShoppingCart >= 50) {
  console.log(
    'Complimenti, hai diritto alla psedizione gratuita! Il totale del tuo carrello è: ' +
      totalShoppingCart
  );
} else {
  console.log(
    'Desolati, non hai diritto alla spedizione gratuita! Il totale del tuo carrello è: ' +
      (totalShoppingCart + shippingPrice)
  );
}
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 30;
let shippingPrice = 10;
let blackFridayDiscount = (totalShoppingCart * 20) / 100;
let totalWithDiscount = totalShoppingCart - blackFridayDiscount;

if (totalShoppingCart >= 50) {
  console.log(
    'Complimenti, hai diritto alla psedizione gratuita! Il totale del tuo carrello, con lo sconto Black Friday è: ' +
      totalWithDiscount
  );
} else {
  console.log(
    'Desolati, non hai diritto alla spedizione gratuita!  Il totale del tuo carrello, con lo sconto Black Friday è: ' +
      (totalWithDiscount + shippingPrice)
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num7 = 2;
let num8 = 23;
let num9 = 7;
let first;
let second;
let third;
let numero;

if (num7 > num8) {
  first = num7;
  second = num8;
  first = num8;
  second = num7;
}

console.log(first, second, third);

if (num9 > second) {
  //26>4
  third = second;
  numero = num9;
  third = num9;
}

console.log(first, second, third);
if (numero > first) {
  second = first;
  first = numero;
} else {
  second = numero;
}

console.log("l'ordine è: ", first, second, third);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const value = 5;

if (typeof value === 'number') {
  console.log('è un numero');
} else {
  console.log('non è un numero');
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num10 = 13;

if (num10 / 2 === 0) {
  console.log('è pari');
} else {
  console.log('è dispari');
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

let val = 7;
if (val < 10 && val >= 5) {
  console.log('Meno di 10');
} else if (val < 5) {
  console.log('Meno di 5');
} else {
  console.log('Uguale a 10 o maggiore');
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto';

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();

console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myArray = [];

myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(myArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myArray.splice(9, 1, 100);
console.log(myArray);
