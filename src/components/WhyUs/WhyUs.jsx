import React from "react";

import FreeImg from "../../assets/free.png";
import CreativeImg from "../../assets/creative.png";
import HiddenFeeImg from "../../assets/hidden_fee.png";
import SearchImg from "../../assets/search.png";
import CustomizeImg from "../../assets/customize.png";

import { motion } from "framer-motion";

import styles from "./WhyUs.module.css";

const WhyUs = () => {
  return (
    <section className={styles.why}>
      <h3 className={styles.heading}>Why ReBuild?</h3>

      <div className={styles.box_container}>
        <motion.div
          className={styles.box}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgba(255, 255,255)",
            boxShadow: "0px 0px 8px rgba(#32936f,#32936f,#32936f)",
          }}
        >
          <img src={FreeImg} alt='free' />
          <h3>FREE</h3>
          <p>We offer only FREE services to all users around the globe.</p>
        </motion.div>

        <motion.div
          className={styles.box}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgba(255, 255,255)",
            boxShadow: "0px 0px 8px rgba(#32936f,#32936f,#32936f)",
          }}
        >
          <img src={CreativeImg} alt='free' />
          <h3>Be Creative</h3>
          <p>Our template is designed to satisfy employer expectations</p>
        </motion.div>

        <motion.div
          className={styles.box}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgba(255, 255,255)",
            boxShadow: "0px 0px 8px rgba(#32936f,#32936f,#32936f)",
          }}
        >
          <img src={SearchImg} alt='free' />
          <h3>ATS Friendly</h3>
          <p>Built with Applicant Tracking Systems in mind</p>
        </motion.div>

        <motion.div
          className={styles.box}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgba(255, 255,255)",
            boxShadow: "0px 0px 8px rgba(#32936f,#32936f,#32936f)",
          }}
        >
          <img src={HiddenFeeImg} alt='free' />
          <h3>No Hideen Fees</h3>
          <p>
            All the features in our platform are always FREE, no hidden cost
            ever.
          </p>
        </motion.div>

        <motion.div
          className={styles.box}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgba(255, 255,255)",
            boxShadow: "0px 0px 8px rgba(#32936f,#32936f,#32936f)",
          }}
        >
          <img src={CustomizeImg} alt='free' />
          <h3>Customizable</h3>
          <p>
            Friendly customization and easy to organize by using drag and drop
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
