import React from "react";

export default function ContactForm() {
  return (
    <div className="row pl-4 pr-4 d-flex align-content-around flex-wrap">
      <h6 className="font-weight-bold text-white mt-2 mb-2">
        <ins>Get In Touch With Us</ins>
      </h6>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Your Name*"
        aria-label="Your Name*"
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Your Email Address*"
        aria-label="Your Email Address*"
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Your Contact Number"
        aria-label="Your Contact Number"
      />
      <textarea
        type="textarea"
        className="form-control mb-2"
        placeholder="Your Message"
        aria-label="Your Message"
        rows="4"
        cols="50"
      />
      <button
        type="button "
        className="btn btn-dark btn-sm btn-block btn-outline-light mt-2 mb-2"
      >
        Send
      </button>
    </div>
  );
}
