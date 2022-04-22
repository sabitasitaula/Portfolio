import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../Common/Icon";
import "./NavBar.css";
import logo from "../../assets/images/logo.PNG"

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuBar = () => {
    if (window.innerWidth <= 768) {
      toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) { setToggleMenu(false); }
    
    })
    
  }, [setToggleMenu, toggleMenu]);
  
  return (
    <>
      <header className="HomePageDiv sticky-top">
        <nav>
          {/* <h3>Sabita</h3> */}
          <h3><i class="fab fa-scribd">abita</i></h3>
          <div className={toggleMenu ? "navLinks toggleNav" : "navLinks"}>
            <Link to="/" onClick={toggleMenuBar}>
              Home
            </Link>
            <Link to="/project" onClick={toggleMenuBar}>
              Projects
            </Link>
            <Link to="/contact" onClick={toggleMenuBar}>
              Contact
            </Link>
          </div>
          <div className="menubar">
                      <Icon icon="fas fa-bars " onClick={toggleMenuBar} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
