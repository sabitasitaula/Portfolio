import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerClass">
      <hr />
      Copyright &copy; {new Date().getFullYear()} All Rights Reserved | Sabita
      Sitaula
    </div>
  );
};

export default Footer;
