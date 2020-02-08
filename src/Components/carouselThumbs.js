import React from "react";
import "./carouselThumbs.css";

export default function({ setActiveIndex }) {
  return (
    <div className="carouselThumbdiv justify-content-around d-flex">
      <div
        className="owl-thumb-item"
        onClick={() => {
          setActiveIndex(0);
        }}
      >
        <i className="icofont-rocket-alt-1"></i>
        <h3>About Us</h3>
        <p>
          We strive to embrace and drive change in our industry which allows us
          to keep our clients relevant.
        </p>
      </div>
      <div
        className="owl-thumb-item"
        onClick={() => {
          setActiveIndex(1);
        }}
      >
        <i className="icofont-rocket-alt-1"></i>
        <h3>About Our Founders</h3>
        <p>
          We set up with an idea whose fruition led into us being leaders of
          Change in an evergrowing industry.
        </p>
      </div>
    </div>
  );
}
