import React from "react";

import ContactInfo from "./FooterComponents/ContactInfo";
import NewsLetter from "./FooterComponents/NewsLetter";
import ContactForm from "./FooterComponents/ContactForm";
import Hotlinks from "./FooterComponents/Hotlinks";

export default function() {
  return (
    <section id="contact">
      <div
        className="col-xs-12 col-sm-12 col-md-12 p-md-0 p-4 page-footer font-small text-white text-center"
        style={{ backgroundColor: "rgb(97, 53, 219)" }}
      >
        <p className="mb-0 p-5 col-md-6 offset-md-3 col-sm-12 h4 font-weight-light blockquote">
          <span>
            <i
              className="icofont-quote-left mb-1"
              style={{
                fontSize: "18px",
                color: "white",
                position: "absolute",
                left: "35px"
              }}
            ></i>
          </span>
          Whether you are planning for a new start-up or looking for the best
          business solutions and guidance to excel your business empire, Jain
          Dhingra & Associates stands with you to resolve all your queries with
          its best to let you touch the sky of success.
          <i
            className="icofont-quote-right"
            style={{ fontSize: "18px", color: "white", position: "absolute" }}
          ></i>
        </p>
      </div>
      <footer
        className="page-footer font-small"
        style={{ backgroundColor: "rgb(98, 0, 238)" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3">
              <ContactInfo />
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
            <div className="col-md-3">
              <Hotlinks />
              <div className="row">
                <a href="#">
                  <i class="icofont-circled-up text-white float-right ml-4"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
