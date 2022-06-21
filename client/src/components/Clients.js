import React, { Component } from "react";

class Clients extends Component {
  render() {
    return (
      <section id="clients">
        <div className="headline">NOSSOS CLIENTES</div>
        <div id="clients-container">
          <img className="client" src="./img/netflix.png" alt="Netflix" />
          <img className="client" src="./img/google.png" alt="Google" />
          <img className="client" src="./img/apple.png" alt="Apple" />
          <img className="client" src="./img/microsoft.png" alt="Microsoft" />
        </div>
      </section>
    );
  }
}

export default Clients;
