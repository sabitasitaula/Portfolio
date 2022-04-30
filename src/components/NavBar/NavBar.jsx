import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../Common/Icon";
import "./NavBar.css";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [activeLink, activeLinkSet] = useState("/");
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

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
    let path = location.pathname;
    if (path !== activeLink) {
      activeLinkSet(path);
    }
  }, [setToggleMenu, toggleMenu, activeLink,location.pathname]);

  return (
    <>
      <header className="HomePageDiv sticky-top">
        <nav>
          <h3>
            <i className="fab fa-scribd"><a href="/">abita</a></i>
          </h3>
          <div className={toggleMenu ? "navLinks toggleNav" : "navLinks"}>
            <Link
              to="/"
              className={activeLink === "/" ? "active" : null}
              onClick={() => {
                toggleMenuBar();
                activeLinkSet("/");
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={activeLink === "/about" ? "active" : null}
              onClick={() => {
                toggleMenuBar();
                activeLinkSet("/about");
              }}
            >
              About
            </Link>
            <Link
              to="/services"
              className={activeLink === "/services" ? "active" : null}
              onClick={() => {
                toggleMenuBar();
                activeLinkSet("/services");
              }}
            >
              Services
            </Link>
            <Link
              to="/project"
              className={activeLink === "/project" ? "active" : null}
              onClick={() => {
                toggleMenuBar();
                activeLinkSet("/project");
              }}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={activeLink === "/contact" ? "active" : null}
              onClick={() => {
                toggleMenuBar();
                activeLinkSet("/contact");
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
