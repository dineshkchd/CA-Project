import React from "react";
import { Aboutsection, Footer } from "../../components/Layout";
import {
  ProfileSpan,
  ProfileText,
  ProfileTitle,
} from "../../constants/Paragram";
import aboutImage from "../../assets/images/profileImgOne.jpg";
import OurValue from "../../components/OurValue";
import WhatWeDo from "../../components/WhatWeDo";
import WhyUs from "../../components/WhyUs";
import ResHeader from "../../components/ResponsiveMemu/Header";

const About = () => {

  return (
    <>
      <ResHeader />
      <Aboutsection
        text={ProfileText}
        title={ProfileTitle}
        span={ProfileSpan}
        src={aboutImage}
      />
      <OurValue />
      <WhatWeDo />
      <WhyUs />
      <Footer />
    </>
  )
};

export default About;
