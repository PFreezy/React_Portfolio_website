import React from "react";
//page componants
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ResumeSection from "../components/ResumeScetion";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />;
      <SkillsSection />
      <ResumeSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
