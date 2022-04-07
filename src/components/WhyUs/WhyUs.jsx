import React from "react";

import FreeImg from "../../assets/free.png";
import CreativeImg from "../../assets/creative.png";
import HiddenFeeImg from "../../assets/hidden_fee.png";
import SearchImg from "../../assets/search.png";
import FilterImg from "../../assets/glasses.png";
import CustomizeImg from "../../assets/customize.png";

import styles from "./WhyUs.module.css";

const WhyUs = () => {
  return (
    <section className={styles.why}>
      <h3 className={styles.heading}>Why ReBuild?</h3>

      <div className={styles.box_container}>
        <div className={styles.box}>
          <img src={FreeImg} alt='free' />
          <h3>FREE</h3>
          <p>We offer only FREE services to all users around the globe.</p>
        </div>

        <div className={styles.box}>
          <img src={CreativeImg} alt='free' />
          <h3>Be Creative</h3>
          <p>Our template is designed to satisfy employer expectations</p>
        </div>

        <div className={styles.box}>
          <img src={SearchImg} alt='free' />
          <h3>ATS Friendly</h3>
          <p>Built with Applicant Tracking Systems in mind</p>
        </div>

        <div className={styles.box}>
          <img src={HiddenFeeImg} alt='free' />
          <h3>No Hideen Fees</h3>
          <p>
            All the features in our platform are always FREE, no hidden cost
            ever.
          </p>
        </div>

        <div className={styles.box}>
          <img src={CustomizeImg} alt='free' />
          <h3>Customizable</h3>
          <p>
            Friendly customization and easy to organize by using drag and drop
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
