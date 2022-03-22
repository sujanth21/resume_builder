import React from "react";
import { Link } from "react-router-dom";
import ResumeImg from "../../assets/resume.svg";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.content}>
        <h3>
          Build your future with <span>ReBuild</span>{" "}
        </h3>
        <p>
          Create your <span>FREE</span> resume today and start your amazing
          career
        </p>
        <Link to='/builder' className={styles.btn}>
          Create Now
        </Link>
      </div>

      <div className={styles.image}>
        <img src={ResumeImg} alt='header image' />
      </div>
    </main>
  );
};

export default Home;
