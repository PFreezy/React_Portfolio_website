import React from "react";
//style
import styled from "styled-components";
import { About } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
//scroll
import { fade } from "../Animation";
import { UseScroll } from "./UseScroll";

const ResumeSection = () => {
  const [element, controls] = UseScroll();
  return (
    <Resume ref={element} variants={fade} animate={controls}>
      <h2>
        <span>Resume</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Summary">
          {/* <h4>Summary</h4> */}
          <div className="answer">
            <h3>PRAFUL MAURYA</h3>
            <ul>
              <li>Birthday: 14th Nov. 1997</li>
              <li>Thane, IN</li>
              <li>(+91) 9967818196</li>
              <li>work.praful4@gmail.com</li>
              <li>Age: 24</li>
            </ul>
          </div>
        </Toggle>
        <Toggle title="Education">
          <div className="answer">
            <h3>BACHELORS OF COMMERCE</h3>
            <p>Mumbai univesity (2019)</p>
          </div>
        </Toggle>
        <Toggle title="Certificates">
          <div className="answer">
            {/* <h3>FRONT END DEVELOPER INTREN, TOM TECH</h3> */}
            <ul>
              <li>The Creative JavaScript Course- Udemy</li>
              <li>Learn CSS for Beginners- Udemy</li>
              <li>React Basics-Udemy</li>
              <li>The Creative React and Redux Course</li>
            </ul>
          </div>
        </Toggle>
        <Toggle title="Professional experience">
          <div className="answer">
            <h3>FRONT END DEVELOPER INTREN, TOM TECH (2022)</h3>
            <ul>
              <li>Creating Webpages using HTML, CSS & JavaScript</li>
              <li>On-site installation of software packages</li>
              <li>
                Understood core business processes and identified technologies
              </li>
            </ul>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Resume>
  );
};

const Resume = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  h3 {
    font-weight: lighter;
    font-size: 1.5rem;
    color: #5fb4ed;
    padding: 0.5rem 0rem;
  }

  .resume-line {
    background: #cccccc;
    height: 0.2rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
    width: 100%;
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
    ul li {
      padding: 1rem 0rem;
      margin-left: 1.3%;
      font-size: 1.1rem;
    }
  }
`;

export default ResumeSection;
