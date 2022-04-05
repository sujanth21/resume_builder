import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import styles from "./Style.module.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2>About Us !</h2>
        <h3>
          Welcome To <span>ReBuild</span>
        </h3>
        <p>
          <span>ReBuild</span> is a professional <span>resume builder</span>{" "}
          platform that uses artificial intelligence to enhance the performance.
          At ReBuild we provide advanced technologies such as application
          tracking, spell checking, grammer checking and much more features that
          uses AI. We're dedicated to providing you the best{" "}
          <span>Features</span> that are not unique to our platform.We're
          working to turn our passion for <span>programming</span> into a
          booming <a>online resume builder</a>. We hope you enjoy our{" "}
          <span>Resume Builder</span> as much as we enjoy offering them to you.
        </p>

        <p>
          Thanks For Visiting Our Site
          <br />
          <br />
          <span>Have a great day & enjoy the FREE service!</span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
