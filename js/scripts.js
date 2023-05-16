'use strict'

const btn = document.querySelector('#radom')
const parent = document.querySelector('#balls')

const addElemnet = (elem, number) => {
    const element = document.createElement(elem);
    element.textContent = number;
    parent.appendChild(element)
}

btn.addEventListener('click', () => {

const howManyBalls = 6;

parent.innerText = '';


const maxValue = 42;

const tabRandomNumbers = [];

const tabFinalNumbers = [];

for(let i = 0; i < howManyBalls; i++){
    
    const randomNumber = Math.floor(Math.random() * maxValue + 1)

    tabRandomNumbers.push(randomNumber);


    if(tabFinalNumbers.indexOf(randomNumber) === -1 ){
        tabFinalNumbers.push(randomNumber);
        addElemnet('div', randomNumber);
    }
    else {
        i--;
        continue
    }

}

console.log(tabRandomNumbers);
console.log(tabFinalNumbers);



});


console.log(Math.floor(Math.random() * 10 + 1))