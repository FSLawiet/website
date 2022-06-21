import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <section id="product">
        <div className="headline">NOSSO PRODUTO</div>
        <div id="product-container">
          <img src="./img/iphone-x.png" alt="Produto" className="product-img" />
          <div id="product-items">
            <div className="product-item">
              <i className="fas fa-map-marked fa-2x color-primary"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda laboriosam autem officia cum odit consequuntur!
              </p>
            </div>
            <div className="product-item">
              <i className="fas fa-users fa-2x color-primary"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda laboriosam autem officia cum odit consequuntur!
              </p>
            </div>
            <div className="product-item">
              <i className="fas fa-glass-cheers fa-2x color-primary"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda laboriosam autem officia cum odit consequuntur!
              </p>
            </div>
            <div className="product-item">
              <i className="fas fa-book-open fa-2x color-primary"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda laboriosam autem officia cum odit consequuntur!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
