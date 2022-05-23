import React, { useState, useEffect } from "react";
// import covidapp from "../../assets/images/covidapp.PNG";
import git1 from "../../assets/images/lady1.jpg";
import git from "../../assets/images/git.jpg";
import Card from "../../components/Common/Card";
import { useGetProjectsQuery } from "../../services/projectsApi";

const Project = () => {
  const [isLoadings, setIsLoadings] = useState(false);
  const { data, error, isSuccess, isError } = useGetProjectsQuery();

  useEffect(() => {
    setIsLoadings(true);
  }, []);
  return (
    <>
      {isLoadings && (
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {isError && error.message}
      {isSuccess &&
        data &&
        data.map((myproject, index) => {
          return (
            <Card
              // imageUrl={github}
              key={index}
              imageUrl={index % 2 === 0 ? git1 : git}
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
