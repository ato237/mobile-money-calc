import React, { useState } from "react";
import Calculate from "../components/CalculateSection";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
} from "../components/InfoSection/Data";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainSection />
      <Calculate />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Footer/>
    </>
  );
};

export default Home;
