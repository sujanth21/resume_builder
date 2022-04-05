import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { SiCountingworkspro } from "react-icons/si";
import { FaBars, FaUser, FaTimes } from "react-icons/fa";

import styles from "./Header.module.css";

const Header = () => {
  const navBarRef = useRef(null);

  const onMenuBarHandler = () => {
    navBarRef.current.classList.add("active");
    console.log(navBarRef.current.classList);
  };

  return (
    <header className={styles.header}>
      <a href='/' className={styles.logo}>
        <SiCountingworkspro color='#32936f' /> ReBuild
      </a>

      <nav className={styles.navbar} ref={navBarRef}>
        <div id={styles.close_navbar}>
          <FaTimes />
        </div>
        <Link to='/'>Home</Link>
        <Link to='/builder'>Builder</Link>
        <Link to='/term'>Terms</Link>
      </nav>

      <div className={styles.icons}>
        <div id={styles.account_btn}>
          <FaUser />
        </div>
        <div id={styles.menu_btn} onClick={onMenuBarHandler}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
