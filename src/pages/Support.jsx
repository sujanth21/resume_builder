import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import styles from "./Style.module.css";
import SupportImg from "../assets/help.svg";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";

const Support = () => {
  return (
    <AnimatedPage>
      <Header />
      <div className={styles.container}>
        <h2>Help & Support</h2>

        <div className={styles.image}>
          <img src={SupportImg} alt='' />
        </div>

        <div className={styles.content}>
          <div>
            <p>
              We are here to help you to get into the competetive JOB market
            </p>

            <h4>Step by step guid to create awesome resume: </h4>
            <ul className={styles.steps}>
              <li>Go to Builder section</li>
              <li>Fill all the relevant fields in the editor form</li>
              <li>Click the 'Preview Resume' button to check all the data</li>
              <li>Download the resume and share with the world</li>
            </ul>

            <p>
              Feel free to shoot an email to support@rebuild-ga.com for a quick
              query
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </AnimatedPage>
  );
};

export default Support;
