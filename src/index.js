import {select, arc} from 'd3';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height'); // parseFloat() 可以用 + 快速实现

const g = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

const circle = g.append('circle')
    .attr('transform', `scale(0.9)`)
    .attr('r', height / 2)
    .attr('fill', 'yellow')
    .attr('stroke', 'black')
    .attr('stroke-width', 10);


const eyeSpacing = 100;
const eyeYOffset = -70;
const eyeRadius = 30;
const eyebrowWidth = 50;
const eyebrowHeight = 20;
const eyebrowYOffset = -70;

const eyesGroup = g.append('g')
    .attr('transform', `translate(0, ${eyeYOffset})`)
    .attr('fill', 'black');

const leftEye = eyesGroup.append('circle')
    .attr('r', eyeRadius)
    .attr('cx', -eyeSpacing)

const rightEye = eyesGroup.append('circle')
    .attr('r', eyeRadius)
    .attr('cx', eyeSpacing)

const eyebrownG = eyesGroup
    .append('g')
    .attr('transform', `translate(0, ${eyebrowYOffset})`);

eyebrownG
    .transition().duration(2000)
    .attr('transform', `translate(0, ${eyebrowYOffset - 50})`)
    .transition().duration(2000)
    .attr('transform', `translate(0, ${eyebrowYOffset})`);

const leftEyebrow = eyebrownG.append('rect')
    .attr('x', -eyeSpacing - eyebrowWidth / 2)
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight);

const rightEyebrow = eyebrownG
    .append('rect')
    .attr('x', eyeSpacing - eyebrowWidth / 2)
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight);


const mouth = g.append('path')
    .attr('d', arc()({
        innerRadius: 150,
        outerRadius: 170,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2,
    }))