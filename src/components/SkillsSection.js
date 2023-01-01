import React from "react";
//import images and icons
// import clock from "../img/clock.svg";
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import react from "../img/react.png";
import home2 from "../img/home2.png";
//style
import styled from "styled-components";
import { About, Description, Image, Hide } from "../style";
// Scroll intersection
// import { useInView } from "react-intersection-observer";
// import { useAnimation } from "framer-motion";
// animation
import { fade } from "../Animation";
import { UseScroll } from "./UseScroll";

const SkillsSection = () => {
  const [element, controls] = UseScroll();
  return (
    <Services variants={fade} animate={controls} initial="hidden" ref={element}>
      <Description>
        <h2>
          My <span>Skills</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={html} />
              <h3>HTML</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={css} />
              <h3>CSS</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={javascript} />
              <h3>JavaScript</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={react} />
              <h3>React.js</h3>
            </div>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

//style
const Services = styled(About)`
  h2 {
    padding-bottom: 4rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    height: 3rem;
    width: 3rem;
  }
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    height: 50%;
    padding: 2rem 0rem 2rem 0rem;
    display: flex;
    align-items: center;
    h3 {
      font-weight: lighter;
      letter-spacing: 0.8px;
      font-size: 2rem;
      margin-left: 1rem;
    }
  }
`;

export default SkillsSection;
