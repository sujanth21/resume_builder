import React from "react";
import { Link } from "react-router-dom";
import HeaderImg from "../../assets/header-img.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={HeaderImg} alt='header image' />
      <div className={styles.content}>
        <p className={styles.heading}>
          Build your future with{" "}
          <span>
            <Link to='/builder'>ReBuild</Link>
          </span>
        </p>
        <p className={styles.heading}>
          Create your <span>FREE</span> resume today and start your amazing
          career
        </p>
      </div>
    </div>
  );
};

export default Header;
