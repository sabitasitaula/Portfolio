import React from "react";
import "../About/About.css";
import Icon from "../../components/Common/Icon";
import AboutCard from "../../components/Common/AboutCard";
import Accordion from "../../components/Common/Accordion";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <div className="aboutImageWrapper">
        <div className="aboutImage"></div>
        <h1>About Me</h1>
        <p>
          Namaste 🙏, I am Sabita Sitaula, Bsc. CSIT student from Madan Bhandari
          Memorial College and I am seeking a position as a front-end developer.
        </p>
        <p>
          I enjoy having complex problems and turning them into simple and
          beautiful interface designs. I also love the logic and structure of
          coding and always strieve to write elegant and efficient code.
          <br />
          <span>Thanks for stopping by.</span>
        </p>
      </div>

      <div className="aboutIcon">
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
        <a href="https://github.com/" target="_blank" rel="noreferrer">
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

      <div className="experienceClass">
        <h1>Experience</h1>
        <div className="accordionClass">
          <Accordion
            header1="Sarobar Technology Pvt. Ltd."
            description1="I have done 3 month React Developer Internship at Sarobar
              Technology Pvt. Ltd. where I am involved in customer dashboard of
              logistics management system (React Js) and designed and developed
              user interface using material UI. This application has customer
              authentication using JWT token. We had Fetched and posted data to
              backend API using axios and Embedded navigation using react router
              DOM."
            header2="Optimum Futurist"
            description2="I have done 3 month Software Engineering Trainee at
              Optimum Futurist where I learned about the whole lifecycle of
              Software Development process. In 3 month of period, I have Designed and Developed personal portfolio using MERN stack, Developed E-commerce site that sells Dumplings using MERN stack, Developed HR and Event management system that handles all the information related to employees and manages the events that occurs in the organization using MERN stack and Developed React-Native E-commerce mobile application that sells Dumplings"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
