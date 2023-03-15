//  Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const row = document.querySelector('.row');
const card= document.getElementsByClassName('card')
console.log(card);

for (let i = 1; i <= 100; i++) {
    let number = i;
    let cardClass = '';


    if (number % 3 === 0 && number % 5 === 0) {
        number = 'fizzBuzz';
        cardClass = 'fizz-buzz'
        console.log(number);
    } else if (number % 3 === 0) {
        number = 'fizz'
        cardClass= 'fizz'
        console.log(number);
    } else if (number % 5 === 0) {
        number = 'buzz'
        cardClass='buzz'
        console.log(number);
    }
    
    const col = `<div class="col">
                    <div class="card ${cardClass}">${number}</div>
                </div>`
     row.innerHTML += col;           

}
