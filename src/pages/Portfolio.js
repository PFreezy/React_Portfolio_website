import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//images
import beatmaker from "../img/beatmaker.png";
import meraki from "../img/meraki.png";
import waves from "../img/waves.png";
import ScrollTop from "../components/ScrollTop";

//animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  imgAnimation,
  lineAnimation,
  sliderAnimation,
  sliderContainer,
} from "../Animation";

const Portfolio = () => {
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={sliderAnimation}></Frame1>
        <Frame2 variants={sliderAnimation}></Frame2>
        <Frame3 variants={sliderAnimation}></Frame3>
        <Frame4 variants={sliderAnimation}></Frame4>
      </motion.div>
      <Project>
        <motion.h2 variants={fade}>Meraki Sports</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/portfolio/meraki">
          <Hide>
            <motion.img variants={imgAnimation} src={meraki} alt="meraki" />
          </Hide>
        </Link>
      </Project>
      <Project>
        <motion.h2 variants={fade}>Portfolio</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/portfolio/waves">
          <motion.img variants={imgAnimation} src={waves} alt="waves" />
        </Link>
      </Project>
      <Project>
        <motion.h2 variants={fade}>The BeatMaker</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/portfolio/the-beatmaker">
          <motion.img variants={imgAnimation} src={beatmaker} alt="beatmaker" />
        </Link>
      </Project>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Project = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    transition: all 0.5s;
    @media (max-width: 760px) {
      display: block;
      height: 52%;
      width: 100%;
      object-fit: contain;
    }
    &:hover {
      filter: contrast(75%);
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Portfolio;
