import { scaleOrdinal } from 'd3';

const colorScale = scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['#FF8888', '#FFED88']);

const sizeScale = scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['50', '30']);

export const fruitBowl = (selection, props) => {
    const {fruits, height} = props;
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