import React from "react";

export default function({ headingText, headingDescription, backgroundText }) {
  return (
    <div className="row">
      <div className="col-lg-8 offset-lg-2 text-center">
        <div className="animated fadeInUp">
          <div className="section-title">
            <h1 className="mt-4"style={{ color: "#7d3cff" }}>{headingText}</h1>
            <p className="font-weight-bold text-secondary">{headingDescription}</p>
            <span className="section-title-bg">{backgroundText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
