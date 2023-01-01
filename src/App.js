import React from "react";
//Global style
import GlobalStyle from "./components/GlobalStyle";
//style
import { About } from "./style";
//import pages
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import Nav from "./components/Nav";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  // console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        {/* we put AnimatePresence to tell that exit animation should
        be present when we switch the page and how we know when we swithed?
        by using useLocation and it's pathname(key) */}
        {/* exitBeforeEnter means finish the exit animation then
      only swith other page */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/portfolio" excat element={<Portfolio />} />
          <Route path="/portfolio/:id" exact element={<ProjectDetails />} />
          <Route path="/contact" excat element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
