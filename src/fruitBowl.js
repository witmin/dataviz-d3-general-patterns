import {scaleOrdinal} from 'd3';

const colorScale = scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['#FF8888', '#FFED88']);

const sizeScale = scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['50', '30']);

const xPosition = (d, i) => i * 120 + 60;

export const fruitBowl = (selection, props) => {
    const {fruits, height} = props;

    const circles = selection.selectAll('circle')
        .data(fruits, d => d.id);
    // Enter & Update
    circles
        .enter().append('circle')
        .attr('cx', xPosition)
        .attr('cy', height / 2)
        .attr('r', 0)
        .merge(circles)
        .attr('fill', d => colorScale(d.type))
        .transition().duration(1000)
        .attr('cx', xPosition)
        .attr('r', d => sizeScale(d.type));
    // exit & Update
    circles.exit()
        .transition().duration(1000)
        .attr('r', 0)
        .remove();

    const text = selection.selectAll('text')
        .data(fruits);
    text
        .enter().append('text')
        .attr('x', (d, i) => i * 120 + 60)
        .attr('y', height / 2 + 120)
        .attr('opacity', 0)
        .merge(text)
        .attr('opacity', 1)
        .text(d => d.type)
        .transition().duration(1000)
        .attr('opacity', 1)
        .attr('x', (d, i) => i * 120 + 60);

    text.exit()
        .transition().duration(1000)
        .attr('opacity', 0)
        .remove();
}