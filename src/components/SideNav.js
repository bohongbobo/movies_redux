import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  useEffect(() => {
    const M = window.M;
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  });
  return (
    <div>
      <div>
        <a href="#!" data-target="slide-out" className="sidenav-trigger show-on-large">
          <h2>Movies List Menu</h2>
        </a>
      </div>

      <ul id="slide-out" className="sidenav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/movielist">Moives</Link>
        </li>
        <li>
          <a href="#item3">Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
