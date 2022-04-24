import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="servicePage">
      <h1 className="myService">My Services</h1>
      <div className="serviceDiv">
        <div className="frontEndDiv">
          <h1>Front End</h1>
          <p>Html, Css, React</p>
        </div>
        <div className="backEndDiv">
          <h1>Back End</h1>
          <p>Django, Node Js</p>
        </div>
        <div className="uiDiv">
          <h1>UI Design</h1>
          <p>Figma</p>
        </div>
          </div>
    </div>
  );
};

export default Services;
