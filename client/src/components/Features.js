import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <section id="features">
        <div class="headline">O QUE FAZEMOS</div>
        <div id="features-container">
          <div class="feature">
            <i class="fas fa-tachometer-alt fa-3x"></i>
            <span class="feature-title">Lorem ipsum dolor sit amet.</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ad
              sunt tempora natus illum ea?
            </p>
          </div>
          <div class="feature">
            <i class="fas fa-code fa-3x"></i>
            <span class="feature-title">Lorem ipsum dolor sit amet.</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ad
              sunt tempora natus illum ea?
            </p>
          </div>
          <div class="feature">
            <i class="fas fa-layer-group fa-3x"></i>
            <span class="feature-title">Lorem ipsum dolor sit amet.</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ad
              sunt tempora natus illum ea?
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
