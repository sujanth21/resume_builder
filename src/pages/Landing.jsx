import React from "react";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import WhyUs from "../components/WhyUs/WhyUs";

const Landing = () => {
  return (
    <AnimatedPage>
      <Header />
      <Home />
      <WhyUs />
      <Footer />
    </AnimatedPage>
  );
};

export default Landing;
