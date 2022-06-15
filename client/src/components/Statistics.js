import React, { Component } from "react";

class Statistics extends Component {
  render() {
    return (
      <section id="statistics">
        <div class="headline">NOSSOS DADOS</div>
        <div id="statistics-container">
          <p>{this.props.message}</p>
        </div>
      </section>
    );
  }
}

export default Statistics;
