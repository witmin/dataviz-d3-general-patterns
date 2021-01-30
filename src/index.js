import {select, range} from 'd3';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height'); // parseFloat() 可以用 + 快速实现

const render = (selection, {fruits}) => {
    const circles = selection.selectAll('circle');
    // Enter & Update
    circles.data(fruits)
        .enter().append('circle')
        .attr('cx', (d, i) => i * 120 + 60)
        .attr('cy', height / 2)
        .attr('r', 50)
        .attr('fill', '#B61981')
    // exit & Update
    circles.data(fruits)
        .exit().remove();
}

const makeFruit = type => ({type});

const fruits = range(5)
    .map(() => makeFruit('apple'));

render(svg, {fruits})

setTimeout(() => {
    // Eat an apple
    fruits.pop();
    render(svg, {fruits});
}, 1000);
