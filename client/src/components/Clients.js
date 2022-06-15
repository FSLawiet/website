import React, { Component } from "react";

class Clients extends Component {
  render() {
    return (
      <section id="clients">
        <div class="headline">NOSSOS CLIENTES</div>
        <div id="clients-container">
          <img class="client" src="./img/netflix.png" alt="Netflix" />
          <img class="client" src="./img/google.png" alt="Google" />
          <img class="client" src="./img/apple.png" alt="Apple" />
          <img class="client" src="./img/microsoft.png" alt="Microsoft" />
        </div>
      </section>
    );
  }
}

export default Clients;
