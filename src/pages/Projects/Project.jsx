import React, { useState, useEffect } from "react";
import axios from "axios";
// import covidapp from "../../assets/images/covidapp.PNG";
import git1 from "../../assets/images/lady1.jpg";
import git from "../../assets/images/git.jpg";
import Card from "../../components/Common/Card";

const Project = () => {
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      // .get("https://api.github.com/users/sabitasitaula/repos?per_page=6")
      .get("https://immense-tor-87617.herokuapp.com/project/6")
      .then((res) => {
        setIsLoading(false);
        setProject(res.data);
      });
  }, []);
  return (
    <>
      {isLoading && (
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {!isLoading &&
        project.map((myproject,index) => {
          return (
            <Card
              // imageUrl={github}
              key={index}
              imageUrl={
                index % 2 === 0 ? git1 : git
              }
              altText="covidapp"
              cardTitle={myproject.projectTitle}
              cardText={new Date(myproject.projectDate).toDateString()}
              gitUrl={myproject.projectLink}
            />
          );
        })}
    </>
  );
};

export default Project;
