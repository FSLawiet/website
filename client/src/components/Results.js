import React, { Component } from "react";

class Results extends Component {
  render() {
    return (
      <section id="results">
        <div class="headline">NOSSOS RESULTADOS</div>
        <div id="results-container">
          <p>{this.props.message}</p>
        </div>
      </section>
    );
  }
}

export default Results;
