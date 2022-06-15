import React, { Component } from "react";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";
import Results from "./components/Results";
import Statistics from "./components/Statistics";
import Gallery from "./components/Gallery";

class App extends Component {
  state = {
    response: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/test");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div id="main-container">
        <Clients />
        <Features />
        <Product />
        <Testimonials />
        <Results message={this.state.response} />
        <Statistics message={this.state.response} />
        <Gallery />
      </div>
    );
  }
}

export default App;
