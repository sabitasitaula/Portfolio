import React from "react";
import "./Services.css";
import frontEnd from "../../assets/images/front.png";
import backEnd from "../../assets/images/backend.png";
import uI from "../../assets/images/ui.png";
import Footer from "../Footer/Footer";

const Services = () => {
  return (
    <div className="servicePage">
      <h1 className="myService">My Services</h1>
      <div className="serviceDiv">
        <div className="frontEndDiv">
          <img src={frontEnd} alt="frontEnd" />
          <h1>Front End</h1>
          <p>Html, Css, React</p>
        </div>
        <div className="backEndDiv">
          <img src={backEnd} alt="backEnd" />
          <h1>Back End</h1>
          <p>Django, Node Js</p>
        </div>
        <div className="uiDiv">
          <img src={uI} alt="uI" />
          <h1>UI Design</h1>
          <p>Figma</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
