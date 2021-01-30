import {select, range} from 'd3';
import {fruitBowl} from './fruitBowl';

const svg = select('svg');

const makeFruit = type => ({type});
const fruits = range(5)
    .map(() => makeFruit('apple'));

const render = () => {
    fruitBowl(svg, {
        fruits,
        height: +svg.attr('height')
    });
}

// Show initial fruits
render();

// Eat an apple
setTimeout(() => {
    fruits.pop();
    render();
}, 1000);

// Replacing an apple with a lemon
setTimeout(() => {
    fruits[2].type = 'lemon';
    render();
}, 2000);