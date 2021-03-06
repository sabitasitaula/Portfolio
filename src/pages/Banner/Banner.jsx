import React from "react";
import Icon from "../../components/Common/Icon";
import "./Banner.css";
import Type from "./Type";
import { useNavigate } from "react-router";
import About from "../About/About";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div>
      <main>
        <div className="leftCircle"></div>
        <div className="manDiv"></div>
        <div className="rightCircle">
        </div>
        <div className="bannerIcon">
            <a
              href="https://www.instagram.com/sabita_sitaula/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="fab fa-instagram" />
            </a>
            <a
              href="https://www.facebook.com/sabita.sitaula.79"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="fab fa-facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabitasitaula/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="fab fa-linkedin" />
            </a>
          </div>
        <div className="content">
          <h1>Sabita</h1>
          <h1>Sitaula </h1>
          <div>
            Hi, I am a
            <div>
              <Type />
            </div>
            lives in Kathmandu, Nepal.
          </div>

          <button className="hireMeButton" onClick={() => navigate("/contact")}>
            Hire Me
          </button>
        </div>
      </main>
      <About />
    </div>
  );
};

export default Banner;
