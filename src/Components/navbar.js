import React from "react";

import "./navbar.css";

export default function() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Why Us", link: "#whyus" },
    { name: "Services", link: "#services" },
    { name: "Team", link: "#team" },
    { name: "Contact Us", link: "#contact" }
  ];
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light justify-content-between sticky-top p-0"
      style={{ backgroundColor: "#6200ee" }}
    >
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <a
          className="text-white ml-4 display-3 text-decoration-none"
          style={{ fontFamily: "Monoton" }}
          href="#"
        >
          J.D.A
        </a>
        <ul className="navbar-nav d-flex justify-content-between col-md-4">
          {navItems.map(item => {
            return (
              <li className="nav-item">
                <a
                  className="nav-link text-white text-uppercase p-2"
                  href={item.link}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
