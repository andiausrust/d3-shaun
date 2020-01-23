const svg = d3.select('svg');

d3.json('menu.json').then(data => {

    // join the data to rects
    const rects = svg.selectAll('rect')
        .data(data);

    // update the rects in the dom
    rects.attr('width', 50)
        .attr('height', d => d.orders)
        .attr('fill', 'orange')
        .attr('x', (d, i) => i * 70);

});

