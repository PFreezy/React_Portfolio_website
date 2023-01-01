import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../Animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Tital>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </Hide>
      </Tital>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>
              <a
                target="#"
                href="https://www.linkedin.com/in/praful-maurya-b941a6200/"
              >
                LinkedIn
              </a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>
              <a href="mailto:work.praful4@gmail.com">Send Email</a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>
              <a href="tel:+919967818196">Call: +91 9967818196</a>
            </h2>
          </Social>
        </Hide>
      </div>
      <Hide>
        <StyledIcons variants={titleAnimation}>
          <ul>
            <li>
              <a
                target="#"
                href="https://www.linkedin.com/in/praful-maurya-b941a6200/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a target="#" href="https://www.facebook.com/praful.fernandes.3/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a target="#" href="https://www.instagram.com/prafulfernandess/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a target="#" href="https://github.com/PFreezy">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </StyledIcons>
      </Hide>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Tital = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: #444242;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 2rem;
  }
  h2 a {
    font-size: 2rem;
    text-decoration: none;
    color: #2c95ac;
    transition: all 0.2s ease;
    &:hover {
      color: #232222;
    }
  }
`;

const StyledIcons = styled(motion.div)`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 2rem;
  }
  ul li {
    padding: 0rem 1rem;
  }
  ul li a {
    font-size: 2.3rem;
    text-decoration: none;
    color: #323639;
    transition: all 0.2s ease;
    &:hover {
      color: #5b2fed;
    }
  }
`;

export default Contact;
