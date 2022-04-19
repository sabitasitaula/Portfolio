import React, { useState, useEffect } from "react";
import axios from "axios";
import covidapp from "../../assets/images/covidapp.PNG";
import Card from "../../components/Common/Card";

const Project = () => {
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.github.com/users/sabitasitaula/repos?per_page=6")
      .then((res) => {
        setIsLoading(false);
        setProject(res.data);
      });
  }, []);
  return (
    <>
      {isLoading && (
        <div class="spinner-border text-primary " role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {!isLoading &&
        project.map((myproject) => {
          return (
            <Card
              imageUrl={covidapp}
              altText="covidapp"
              cardTitle={myproject.name}
              cardText={new Date(myproject.pushed_at).toDateString()}
              gitUrl={myproject.html_url}
            />
          );
        })}
    </>
  );
};

export default Project;
