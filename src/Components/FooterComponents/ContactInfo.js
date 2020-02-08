import React from "react";

export default function ContactInfo() {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 p-md-0 p-4">
        <h6 className="font-weight-bold text-white mt-2 mb-2">
          <ins>Address</ins>
        </h6>
        <div className="font-weight-lighter text-white">
          17/14, The Mall, Kanpur, U.P. – 208001
        </div>
        <h6 className="font-weight-bold text-white mt-2 mb-2">
          <ins>Contact Us</ins>
        </h6>
        <div className="row align-items-center font-weight-lighter text-white col-md-12 pl-0 ml-0">
          <i
            className="icofont-phone-circle"
            aria-hidden="true"
            style={{ fontSize: "18px", color: "white" }}
          ></i>
          <div className="font-weight-lighter text-white ml-1">9736136414</div>
        </div>
        <div className="row align-items-center font-weight-lighter text-white col-md-12 pl-0 ml-0">
          <i
            className="icofont-phone-circle"
            aria-hidden="true"
            style={{ fontSize: "18px", color: "white" }}
          ></i>
          <div className="font-weight-lighter text-white ml-1">9415052167</div>
        </div>
        <div className="row align-items-center font-weight-lighter text-white col-md-12 pl-0 ml-0">
          <i
            className="icofont-phone-circle"
            aria-hidden="true"
            style={{ fontSize: "18px", color: "white" }}
          ></i>
          <div className="font-weight-lighter text-white ml-1">9415052167</div>
        </div>
        <div className="row align-items-center font-weight-lighter text-white col-md-12 pl-0 ml-0">
          <i
            className="icofont-email"
            aria-hidden="true"
            style={{ fontSize: "18px", color: "white" }}
          ></i>
          <div className="font-weight-lighter text-white ml-1">
            jaindhingra@gmail.com
          </div>
        </div>
        <p className="text-white mt-2 font-italic font-weight-normal">
          Feel free for all your queries. We are here to serve you with our best
          services!
        </p>
      </div>
    </div>
  );
}
