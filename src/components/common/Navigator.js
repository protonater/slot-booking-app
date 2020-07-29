import React from "react";
import { NavLink } from "react-router-dom";

const navList = [
  {
    link: "/home",
    heading: "Home"
  },
  {
    link: "/booking",
    heading: "Booking"
  },
  {
    link: "/store-admin",
    heading: "Store Admin"
  },
  {
    link: "/profile",
    heading: "User Profile"
  }
];

const Navigator = () => {
  return (
    <div className="section-nav-space-holder d-none d-lg-block">
      <div
        id="section-nav-wrapper"
        className="section-nav-wrapper text-center container-fluid justify-content-center"
      >
        <ul id="section-nav" className="section-nav nav list-inline">
          {navList.map((nav, idx) => (
            <li className="nav-item" style={{ margin: 20 }}>
              <NavLink to={nav.link} exact>
                <span>{nav.heading}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigator;
