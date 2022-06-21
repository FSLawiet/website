import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
        <div className="headline">O QUE ACHAM DE NÓS</div>
        <div id="testimonials-container">
          <div className="testimonial">
            <img
              src="./img/person-1.jpeg"
              alt="Fulano"
              className="testimonial-img"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              repellat minima dolorem consequatur, sunt nobis delectus enim ab
              provident optio.
            </p>
          </div>
          <div className="testimonial">
            <img
              src="./img/person-2.jpeg"
              alt="Siclano"
              className="testimonial-img"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              repellat minima dolorem consequatur, sunt nobis delectus enim ab
              provident optio.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
