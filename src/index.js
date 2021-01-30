import {select, range, scaleOrdinal} from 'd3';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height'); // parseFloat() 可以用 + 快速实现

const colorScale = scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['#FF8888', '#FFED88']);

const sizeScale = scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['50', '30']);

const render = (selection, {fruits}) => {
    const circles = selection.selectAll('circle')
        .data(fruits);

    // Enter & Update
    circles
        .enter().append('circle')
            .attr('cx', (d, i) => i * 120 + 60)
            .attr('cy', height / 2)
        .merge(circles)
            .attr('r', d => sizeScale(d.type))
            .attr('fill', d => colorScale(d.type));

    // exit & Update
    circles.exit().remove();
}

const makeFruit = type => ({type});

const fruits = range(5)
    .map(() => makeFruit('apple'));

// Show initial fruits
render(svg, {fruits});

// Eat an apple
setTimeout(() => {
    fruits.pop();
    render(svg, {fruits});
}, 1000);

// Replacing an apple with a lemon
setTimeout(()=>{
    fruits[2].type = 'lemon';
    render(svg, {fruits});
}, 2000);