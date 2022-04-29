import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../Common/Icon";
import "./NavBar.css";

const NavBar = () => {
  const [activeLink, activeLinkSet] = useState("home");
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuBar = () => {
    if (window.innerWidth <= 768) {
      toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setToggleMenu(false);
      }
    });
  }, [setToggleMenu, toggleMenu]);

  return (
    <>
      <header className="HomePageDiv sticky-top">
        <nav>
          <h3>
            <i class="fab fa-scribd">abita</i>
          </h3>
          <div className={toggleMenu ? "navLinks toggleNav" : "navLinks"}>
            <Link
              to="/"
              className={activeLink === "home" ? "active" : null}
              onClick={() => {
                toggleMenuBar();
                activeLinkSet("home");
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={activeLink === "about" ? "active" : null}
              onClick={() => {
                toggleMenuBar();
                activeLinkSet("about");
              }}
            >
              About
            </Link>
            <Link
              to="/services"
              className={activeLink === "services" ? "active" : null}
              onClick={() => {
                toggleMenuBar();
                activeLinkSet("services");
              }}
            >
              Services
            </Link>
            <Link
              to="/project"
              className={activeLink === "project" ? "active" : null}
              onClick={() => {
                toggleMenuBar();
                activeLinkSet("project");
              }}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={activeLink === "contact" ? "active" : null}
              onClick={() => {
                toggleMenuBar();
                activeLinkSet("contact");
              }}
            >
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
