import React from "react";
import { Link } from "react-router-dom";
import { SiCountingworkspro } from "react-icons/si";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import styles from "./Footer.module.css";
import ContactForm from "../ContactForm/ContactForm";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.box_container}>
        <div className={styles.box}>
          <h3>
            <SiCountingworkspro color='#32936f' /> ReBuild
          </h3>
          <p>
            ReBuild is an online resume generator, that helps aspiring employees
            to get in to the competetive job market. ReBuild is an ongoing
            project that will bring new features to it users every day.
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
          <Link to='/' className={styles.link}>
            Home
          </Link>
          <Link to='/about' className={styles.link}>
            About
          </Link>
          <Link to='/term' className={styles.link}>
            Terms
          </Link>
        </div>

        <div className={styles.box}>
          <h3>Useful Links</h3>
          <Link to='/support' className={styles.link}>
            Support Center
          </Link>
          <Link to='/faq' className={styles.link}>
            FAQ
          </Link>
          <Link to='/feedback' className={styles.link}>
            Feedback
          </Link>
          <Link to='/privacy' className={styles.link}>
            Privacy Policy
          </Link>
          <Link to='/term' className={styles.link}>
            Terms and Conditions
          </Link>
        </div>

        <div className={styles.box}>
          <h3>Newsletter</h3>
          <p>Subscribe to receive updates from us</p>
          <ContactForm />
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
