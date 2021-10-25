/* Scrivi un programma che esegua un ciclo da 1 a 100
e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
per i multipli di 3,
per i multipli di 5
e per i valori che sono sia multipli di 3 che di 5.
Lo facciamo ricreandolo nel layout dato in screeshot (affrontandolo come meglio crediamo).
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
Come creare nuovi elementi html e appenderli al container?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano” */

// seleziono documento dal HTML tramite variabile

let squareContainer = document.getElementById("container_square");


// ciclo for che va da 1 a 100
// dentro al ciclo inserire un if
// il primo comando if serve per i numeri divisibili per 3 e per 5
// il secondo comando if serve per i numeri divisibili per 3
// il secondo comando if serve per i numeri divisibili per 5

for (let index = 1; index <=100; index++) {

    if (index % 15 === 0) {
        
        squareContainer.innerHTML += `<div class="square fizzbuzz">fizzbuzz</div>`;

    } else if (index % 3 === 0) {
        
        squareContainer.innerHTML += `<div class="square fizz">fizz</div>`;

    } else if (index % 5 === 0) {

        squareContainer.innerHTML += `<div class="square buzz">buzz</div>`;

    } else {

        squareContainer.innerHTML += `<div class="square normal">${index}</div>`;

    }
    
}