import React, { Component } from "react";
import * as d3 from "d3";

function Scatterplot({ data }) {
  const [height, setHeight] = React.useState(500);
  const [width, setWidth] = React.useState(840);
  const [padding, setPadding] = React.useState(40);
  React.useEffect(() => {
    generateGraph();
  }, [data]);

  function generateGraph() {
    const svgWidth = width - padding;
    const svgHeight = height - padding;

    //inicialização do tooltip
    const tooltip = d3.select("#tooltip").style("opacity", 0);

    data.map((d) => {
      d.time = new Date(1970, 1, 1, parseInt(d.time / 60), d.time % 60, 0);
    });

    let timeFormat = d3.timeFormat("%H:%M");

    //inicialização das escalas
    const xScale = d3
      .scaleTime()
      .domain([new Date(1970, 1, 1, 0, 0, 0), new Date(1970, 1, 1, 3, 0, 0)])
      .range([padding, svgWidth]);
    const yScale = d3
      .scaleLinear()
      .domain([10, 0])
      .range([padding, svgHeight]);

    var symbol = d3.symbol();

    //inicialização do elemento svg
    const svg = d3
      .select("svg")
      .attr("className", "statistics-canvas")
      .append("g")
      .attr("transform", "translate(" + 10 + ", " + 0 + ")");

    //svg.selectAll("*").remove();
    //renderização dos pontos
    svg
      .selectAll("path")
      .data(data)
      .enter()
      .append("path")
      .attr("className", "dot")
      .attr(
        "d",
        symbol.type((d) => {
          if (d.is_approved) return d3.symbolStar;
          else return d3.symbolCross;
        })
      )
      //.attr("cx", (d) => xScale(d.time))
      //.attr("cy", (d) => yScale(d.average))
      .attr("transform", (d) => {
        return "translate(" + xScale(d.time) + "," + yScale(d.average) + ")";
      })
      .attr("r", 5)
      .attr("fill", (d) => {
        if (d.quarter === 1) return "#c86666";
        else if (d.quarter === 2) return "#c8c366";
        else if (d.quarter === 3) return "#6666c8";
        else if (d.quarter === 4) return "#66c866";
      })
      .attr("stroke", "#eee")
      .on("mouseover", (event, d) => {
        tooltip
          .style("opacity", 0.9)
          .style("left", event.pageX + "px")
          .style("top", event.pageY - 8 + "px")
          .html(
            `<small><b>Aluno: </b>${
              d.student_name
            }</small><small><b>Bimestre: </b>${
              d.quarter
            }º Bimestre</small><small><b>Média de notas: </b>${
              d.average
            }</small><small><b>Duração: </b>${d.time.getMinutes()} minutos</small>`
          );
      })
      .on("mouseout", (event, d) => {
        tooltip.style("opacity", 0);
      });

    //renderização das escalas
    const xAxis = d3.axisBottom(xScale).tickFormat(timeFormat);
    const yAxis = d3.axisLeft(yScale).tickFormat(d3.format(".1f"));

    svg
      .append("g")
      .attr("id", "x-axis")
      .attr("transform", `translate(0, ${svgHeight})`)
      .style("color", "#eee")
      .call(xAxis)
      .append("text")
      .style("text-anchor", "end")
      .attr("color", "#eee")
      .attr("className", "x-axis-label")
      .attr("x", width)
      .attr("y", -6)
      .text("Duração das provas");

    svg
      .append("g")
      .attr("id", "y-axis")
      .attr("transform", `translate(${padding}, 0)`)
      .style("color", "#eee")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -6)
      .attr("dy", ".71em")
      .attr("className", "y-axis-label")
      .style("text-anchor", "end")
      .attr("color", "#eee")
      .text("Média das notas");

    svg
      .append("text")
      .attr("x", 360)
      .attr("y", 490)
      .style("font-size", "12")
      .style("fill", "#eee")
      .text("Duração das provas");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -270)
      .attr("y", 8)
      .style("font-size", "12")
      .style("fill", "#eee")
      .text("Média das notas");

    let legendContainer = svg.append("g").attr("id", "legend");

    let legend = legendContainer
      .selectAll("#legend")
      .data(["#66c866", "#6666c8", "#c8c366", "#c86666"])
      .enter()
      .append("g")
      .attr("className", "legend-label")
      .attr(
        "transform",
        (d, i) => "translate(0, " + (height / 2 - i * 20) + ")"
      );

    legend
      .append("rect")
      .attr("x", width - 124)
      .attr("width", 15)
      .attr("height", 15)
      .style("fill", (d) => d)
      .style("stroke", "#eee");

    legend
      .append("text")
      .attr("x", width - 104)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("fill", "#eee")
      .text((d) => {
        if (d === "#c86666") return "1º Bimestre";
        else if (d === "#c8c366") return "2º Bimestre";
        else if (d === "#6666c8") return "3º Bimestre";
        else if (d === "#66c866") return "4º Bimestre";
      });
  }

  return <svg width={width} height={height} />;
}

class Statistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="statistics">
        <div className="headline">NOSSOS DADOS</div>
        <div id="statistics-container">
          <div id="tooltip" className="tooltip"></div>
          <Scatterplot data={this.props.data} />
        </div>
      </section>
    );
  }
}

export default Statistics;
