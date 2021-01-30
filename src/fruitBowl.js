import {scaleOrdinal} from 'd3';

const colorScale = scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['#FF8888', '#FFED88']);

const sizeScale = scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['50', '30']);


export const fruitBowl = (selection, props) => {
    const {fruits, height} = props;

    const groups = selection.selectAll('g')
        .data(fruits);
    const groupEnter = groups.enter().append('g')
        .attr('opacity', 0)
        .attr('transform', `scale(0)`);
    groupEnter.merge(groups)
        .attr('transform', (d, i) => `translate(${i * 120 + 60}, ${height / 2})`)
        .transition().duration(1000)
        .attr('opacity', 1);

    groups.exit()
        .transition().duration(1000)
        .attr('opacity', 0)
        .attr('r', 0)
        .remove();

    // Enter & Update
    groupEnter.append('circle')
        .attr('r', 0)
        .merge(groups.select('circle'))
        .attr('fill', d => colorScale(d.type))
        .transition().duration(1000)
        .attr('r', d => sizeScale(d.type));

    groupEnter.append('text')
        .attr('y', 100)
        .attr('opacity', 1)
        .merge(groups.select('text'))
        .text(d => d.type)
        .transition().duration(1000)
        .attr('opacity', 1)

}