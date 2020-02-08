import React from "react";
import "./Hotlinks.css";

export default function HotLinks() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Why Us", link: "#whyus" },
    { name: "Services", link: "#services" },
    { name: "Team", link: "#team" },
    { name: "Contact Us", link: "#contact" }
  ];
  return (
    <div className="row pl-4 pr-4">
      <h6 className="font-weight-bold text-white mt-2 mb-2">
        <ins>Hot Links</ins>
      </h6>
      <ul className="list-unstyled text-white col-md-12 pl-0">
        {navItems.map(e => {
          return (
            <a
              className="cool-link text-decoration-none text-white"
              href={e.link}
            >
              {e.name}
            </a>
          );
        })}
      </ul>
    </div>
  );
}
