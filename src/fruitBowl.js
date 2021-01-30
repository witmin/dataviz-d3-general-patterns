import {scaleOrdinal} from 'd3';

const colorScale = scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['#FF8888', '#FFED88']);

const sizeScale = scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['50', '30']);

export const fruitBowl = (selection, props) => {
    const {fruits, height} = props;
    const circles = selection.selectAll('circle')
        .data(fruits, d => d.id);

    // Enter & Update
    circles
        .enter().append('circle')
        .attr('cx', 0)
        .attr('cy', height / 2)
        .attr('r', 0)
        .merge(circles)
        .attr('fill', d => colorScale(d.type))
        .transition().duration(1000)
            .attr('cx', (d, i) => i * 120 + 60)
            .attr('r', d => sizeScale(d.type));

    // exit & Update
    circles.exit()
        .transition().duration(1000)
            .attr('r', 0)
        .remove();
}