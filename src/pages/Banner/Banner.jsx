import React from "react";
import Icon from "../../components/Common/Icon";
import "./Banner.css";
import Type from "./Type";

const Banner = () => {
  return (
    <div>
      <main>
        <div className="leftCircle"></div>
        <div className="manDiv"></div>
        <div className="rightCircle">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Icon icon="fab fa-instagram" />
          </a>

          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
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
          <p> Hi, I am a <span><Type /></span>lives in Kathmandu, Nepal.</p>

          <button>Hire Me</button>
        </div>
        <div className="icon"></div>
      </main>
    </div>
  );
};

export default Banner;
