import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import WorkFlow from "./WorkFlow";
import Pricing from "./Pricing";
import UiSection from "./UiSection";
import Patners from "./Patners";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <UiSection />
      <WorkFlow />
      <Pricing />
      <Patners />
    </>
  );
};

export default HomePage;
