import React from "react";
import "./visionMission.css";

export default function() {
  return (
    <section id="visionmission" style={{ marginTop: "140px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 gradient-vision text-center border-right border-right-light">
            <h1 className="text-white mt-4 text-uppercase "> Our Vision</h1>
            <i className="icofont-quote-left text-white "></i>
            <p className="font-weight-bold text-white text-capitalize font-italic lead mt-4">
              To help our clients to meet their goals through our professionals,
              services and solutions.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 gradient-mission text-center">
            <h1 className="text-white mt-4 text-uppercase "> Our Mission</h1>
            <i className="icofont-quote-right text-white "></i>
            <p className="font-weight-bold text-white text-capitalize font-italic lead mt-4">
              To provide the best professional solutions to fulfil the
              client&#39;s business requirements, guiding at our best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
