import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <section id="gallery">
        <div className="headline">GALERIA</div>
        <div id="gallery-container">
          <img src="./img/image-1.jpeg" alt="Imagem" className="gallery-img" />
          <img src="./img/image-2.jpeg" alt="Imagem" className="gallery-img" />
          <img src="./img/image-3.jpeg" alt="Imagem" className="gallery-img" />
          <img src="./img/image-4.jpeg" alt="Imagem" className="gallery-img" />
          <img src="./img/image-5.jpeg" alt="Imagem" className="gallery-img" />
          <img src="./img/image-6.jpeg" alt="Imagem" className="gallery-img" />
        </div>
      </section>
    );
  }
}

export default Gallery;
