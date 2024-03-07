// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// CREO BOX NUMERATO DA 1 A 100
// Creo una costante che seleziona il mio container
const container = document.querySelector('.container')
// Creo il ciclo per la creazione delle boxes
for (let i = 1; i <=100; i++){
    let FizzBuzz;
    if (i % 3 === 0 & i % 5 === 0) {
        FizzBuzz = 'FizzBuzz';
        console.log(FizzBuzz);
    } else if (i % 3 === 0) {
        FizzBuzz = 'Fizz';
        console.log(FizzBuzz);
    } else if (i % 5 === 0) {
        FizzBuzz = 'Buzz';
        console.log(FizzBuzz);
    } else {
        FizzBuzz = i;
        console.log(FizzBuzz);
    }
    // Metto il divBox dentro il container
    let divBox = `<div class="box ${FizzBuzz}">${FizzBuzz}</div>`;
    container.innerHTML += divBox;
}