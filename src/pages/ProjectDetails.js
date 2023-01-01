import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ProjectState } from "../ProjectState";

const ProjectDetails = () => {
  const location = useLocation();
  //   console.log(useHistory);
  const url = location.pathname;
  console.log(url);
  const [projects, setProjects] = useState(ProjectState);
  //   console.log(project);
  const [project, setProject] = useState(null);

  //useEffect
  useEffect(() => {
    const currentProject = projects.filter(
      (ProjectState) => ProjectState.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);
  //   console.log(movie);

  return (
    <>
      {project && (
        <Details>
          <Headline>
            <h1>{project.title}</h1>
            <img src={project.mainImg} alt="movie" />
          </Headline>
          <Awards>
            {project.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>

          <PLink link={project.link} key={project.link} />
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
  padding: 0rem 10rem;
  min-height: 50vh;
`;

const ProjectLink = styled.div`
  text-align: center;
  padding-bottom: 5rem;
  .link {
    color: #e8e7f3;
    text-decoration: none;
    @media (max-width: 1300px) {
      position: absolute;
      left: 20%;
      @media (max-width: 1300px) {
        padding-bottom: 5rem;
      }
    }
    &:hover {
      color: #4747e4;
    }
  }
`;

const Headline = styled.div`
  min-height: 90vh;
  margin: 0rem -6rem;
  padding-top: 20vh;
  position: relative;
  @media (max-width: 1300px) {
    min-height: 50vh;
  }
  h1 {
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 760px) {
      display: block;
      height: 52%;
      width: 100%;
      object-fit: contain;
    }
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  margin: 0rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1300px) {
    display: inline-block;
    margin: 2rem -2rem;
  }
`;

const StyledAward = styled.div`
  .line {
    width: 80%;
    background: #23d997;
    height: 0.4rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }
`;

//Award components

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

const PLink = ({ link }) => {
  return (
    <ProjectLink>
      <a className="link" target="_blank" href={link}>
        {link}
      </a>
    </ProjectLink>
  );
};
export default ProjectDetails;
