import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import WhyUs from "../components/WhyUs/WhyUs";

const Landing = () => {
  return (
    <div>
      <Header />
      <Home />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Landing;
