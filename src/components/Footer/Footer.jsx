import React from "react";
import { SiCountingworkspro } from "react-icons/si";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.box_container}>
        <div className={styles.box}>
          <h3>
            <SiCountingworkspro color='#32936f' /> ReBuild
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            expedita placeat sunt doloremque accusantium quos repudiandae, omnis
            veritatis dicta reprehenderit!
          </p>
          <div className={styles.share}>
            <a href='#'>
              <FaFacebookSquare color='#32936f' />
            </a>
            <a href='#'>
              <FaTwitterSquare color='#32936f' />
            </a>
            <a href='#'>
              <FaInstagramSquare color='#32936f' />
            </a>
            <a href='#'>
              <FaLinkedin color='#32936f' />
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <h3>Quick Links</h3>
          <a href='/' className={styles.link}>
            Home
          </a>
          <a href='/' className={styles.link}>
            About
          </a>
          <a href='/' className={styles.link}>
            Terms
          </a>
        </div>

        <div className={styles.box}>
          <h3>Useful Links</h3>
          <a href='#' className={styles.link}>
            Support Center
          </a>
          <a href='#' className={styles.link}>
            FAQ
          </a>
          <a href='#' className={styles.link}>
            Feedback
          </a>
          <a href='#' className={styles.link}>
            Privacy Policy
          </a>
          <a href='#' className={styles.link}>
            Terms and Conditions
          </a>
        </div>

        <div className={styles.box}>
          <h3>Newsletter</h3>
          <p>Subscribe to receive updates from us</p>
          <form>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              className={styles.email}
            />
            <input type='submit' value='Subscribe' className={styles.btn} />
          </form>
        </div>
      </div>

      <div className={styles.credit}>
        Design & Developed by Sujanth - GA Final Project | All Rights Reserved
        &copy; 2022
      </div>
    </footer>
  );
};

export default Footer;
