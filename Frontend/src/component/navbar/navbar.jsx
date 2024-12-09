import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const colorRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive-nav");
    }
    colorRef.current.classList.toggle("opened-tab");
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div ref={colorRef} className="navbar">
      <div className="navtitles">
        <div className="nav-logo">
          <Link to="/">TrendyNews</Link>
        </div>
        <div className="menu-buttons">
          <button
            className="hamburger fa-solid fa-bars"
            onClick={showNavBar}
            style={{ color: "white", display: isNavOpen ? "none" : "block" }}
          ></button>
          <button
            className="hamburger cross fa-regular fa-x"
            onClick={showNavBar}
            style={{ display: isNavOpen ? "block" : "none" }}
          ></button>
        </div>
      </div>
      <div ref={navRef} className="nav-link">
        <ul>
          <li>
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contactus">CONTACT US</Link>
          </li>
          <li>
            <button className="support-btn"><Link to="/supportus">SUPPORT US</Link></button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
