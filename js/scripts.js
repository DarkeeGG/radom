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
    console.log(i)
}

});