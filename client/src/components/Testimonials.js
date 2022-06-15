import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
        <div class="headline">O QUE ACHAM DE NÓS</div>
        <div id="testimonials-container">
          <div class="testimonial">
            <img
              src="./img/person-1.jpeg"
              alt="Fulano"
              class="testimonial-img"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              repellat minima dolorem consequatur, sunt nobis delectus enim ab
              provident optio.
            </p>
          </div>
          <div class="testimonial">
            <img
              src="./img/person-2.jpeg"
              alt="Siclano"
              class="testimonial-img"
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
