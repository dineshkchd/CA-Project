import React from "react";
import {
  Footer,
  Hero,
  Servicesection,
  Supportsection,
} from "../../components/Layout";
import aboutbanner from "../../assets/images/Accountant-amico.png";
import AboutHerosection from "../../components/Layout/AboutHerosection";

const index = () => {
  return (
    <>
      <Hero />
      <AboutHerosection src={aboutbanner}/>
     
      <Servicesection />
      {/* <NewsSection /
      > */} 
      <Supportsection />
      <Footer />
    </>
  );
};

export default index;
