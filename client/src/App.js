import React, { Component } from "react";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";
import Results from "./components/Results";
import Statistics from "./components/Statistics";
import Gallery from "./components/Gallery";

import client from "./controller/client";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    client.get("/api/results").then((response) => {
      this.setState({ results: response.data });
    });
  }

  render() {
    return (
      <div id="main-container">
        <Clients />
        <Features />
        <Product />
        <Testimonials />
        <Results data={this.state.results} fetchData={this.fetchData} />
        <Statistics data={this.state.results} />
        <Gallery />
      </div>
    );
  }
}

export default App;
