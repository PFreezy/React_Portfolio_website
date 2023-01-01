import React from "react";
import home1 from "../img/home1.png";

//styles components
import styled from "styled-components";
import { About, Description, Image, Hide } from "../style";
import { motion } from "framer-motion";
import { titleAnimation } from "../Animation";
import { fade, imgAnimation } from "../Animation";
//wave
import Wave from "../components/Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>My name is</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              <span>Praful</span> Maurya.
            </motion.h2>
          </Hide>
          <Hide>
            <h1>Front-End Developer</h1>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Proven expertise in creating consumer- focused websites with HTML,
          CSS, and JavaScript. I am a creative and motivated junior front- end
          developer looking for an opportunity to expand my web development
          skills.
        </motion.p>
        <motion.button variants={fade}>
          <LinkBtn>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </LinkBtn>
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={imgAnimation} src={home1} alt="home1" />
      </Image>
      <Wave />
    </About>
  );
};

const LinkBtn = styled(motion.div)`
  .link {
    color: white;
    text-decoration: none;
  }
`;

//styled

export default AboutSection;
