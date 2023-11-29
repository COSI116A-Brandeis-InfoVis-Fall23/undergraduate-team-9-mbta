
(() => {
  function chart() {
    // Chart configuration
    // Based on Mike Bostock's margin convention
    // https://bl.ocks.org/mbostock/3019563
    const margin = { top: 60, right: 150, bottom: 40, left: 150 };
    let width = 800 - margin.left - margin.right;
    let height = 380 - margin.top - margin.bottom;

    //SVG container
    const svg = d3.select("#chart-container")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Sample data 
    const data = [
      { stop: "Maverick", average: 25 },
      { stop: "Aquarium", average: 65 },
      { stop: "State Street", average: 90 },
      { stop: "Government Center", average: 35 },
      { stop: "State Street", average: 30 },
      { stop: "Bowdoing", average: 28 },


    ];

    // X-axis scale
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.average)])
      .range([0, width]);

    // Y-axis scale
    const yScale = d3.scaleBand()
      .domain(data.map(d => d.stop))
      .range([0, height])
      .padding(0.1);

    //X-axis
    const xAxis = d3.axisBottom(xScale);

    //Y-axis
    const yAxis = d3.axisLeft(yScale);

    //Append X-axis to the SVG
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);

    //Append Y-axis to the SVG
    svg.append("g")
      .call(yAxis);

    //Create bars
    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("y", d => yScale(d.stop))
      .attr("width", d => xScale(d.average))
      .attr("height", yScale.bandwidth())
      .attr("fill", "blue");

    svg.append("text")
      .attr("x", width / 2)
      .attr("y", -margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Stops Bar Chart- Average Off");

    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom - 2)
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .text("Number Of Riders");

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 10)
      .attr("x", -height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-size", "14px")
      .text("Stop Names");

    // Return the chart function
    return function update() {

    };
  }


  const myChart = chart();


  myChart();
})();

