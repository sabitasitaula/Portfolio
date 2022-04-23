import React from "react";
import "../About/About.css";
import Icon from "../../components/Common/Icon";
import AboutCard from "../../components/Common/AboutCard";

const About = () => {
  return (
    <div>
      <div className="aboutImageWrapper">
        <div className="aboutImage"></div>
        <h1>About Me</h1>
        <p>
          I am Sabita Sitaula originally from Jhapa, currently living in
          Kathmandu, Nepal. I am currently working as a Software Engineer
          Trainee and is always interested in a challenge.
        </p>
        <p>
          I love my work and enjoy each new project as I get it. Feel free to
          have a look at my portfolio and don't hesitate to contact me if you
          think I can be serve you.
          <br />
          <span>Thanks for stopping by.</span>
        </p>
      </div>

      <div className="aboutIcon">
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
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="fab fa-github" />
        </a>
      </div>

      <div>
        <div className="educationIcon">
          <Icon icon="fad fa-graduation-cap" />
          <h1>Education</h1>
        </div>

        <div>
          <AboutCard
            id="mbmLogo"
            header="Madan Bhandari Memorial College"
            title="Bachelor in Computer science and information technology"
            text="I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc."
            link="https://www.mbmc.edu.np/"
          />
          <AboutCard
            id="nobelLogo"
            header="Nobel Academy H.S. School"
            title="+2 SCIENCE"
            text="I have completed +2 science with Biology as major and Math as optional subject in 2073 B.S."
            link="https://nobel.edu.np/"
          />
          <AboutCard
            id="saraswatiLogo"
            header="Shree Saraswati Secondary School"
            title="SCHOOL LEAVING CERTIFICATE"
            text="I have completed my primary education from Shree Saraswati Secondary School in 2070 B.S."
            link="https://www.facebook.com/Saraswati-Secondary-School-Kamal-7-Jhapa-795812697486947"
          />
        </div>
      </div>

      <div>
        <h1>Experience</h1>
      </div>
    </div>
  );
};

export default About;