import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./ResumeViewer.module.css";

import {
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const ResumeViewer = () => {
  const [columns, setColumns] = useState([[], []]);

  const location = useLocation();
  const { resumeData, sections } = location.state;

  // console.log(`Resume Data: ${resumeData} Sections: ${sections}`);

  const data = {
    workExperience: resumeData[sections.workExp],
  };

  // Work Experience
  const workExperience = (
    <div
      key={"workExp"}
      className={`${styles.section} ${styles.workExperience}`}
    >
      <div className={styles.sectionTitle}>
        {data.workExperience.sectionTitle}
      </div>
      <div className={styles.content}>
        {/**   {data.workExperience?.details.map((exp, index) => {
        return (*/}
        <div className={styles.item}>
          <p className={styles.title}>Mobile Application Developer</p>
          <p className={styles.companyName}>Appearition Pty Ltd</p>
          <div>
            <span className={styles.period}>01/2016 - 01-2020</span>
            <span className={styles.location}>Melbourne</span>
          </div>
          <p className={styles.workDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem
            quidem error dolores tempora debitis quo non ut, incidunt, vel
            aspernatur esse facilis adipisci porro itaque obcaecati minima nemo
            ex?
          </p>
          <p>Achivements / Tasks</p>
          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, magni.
            </li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              facere at quisquam.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae, esse.
            </li>
          </ul>
        </div>
        {/** );
         })}*/}
      </div>
    </div>
  );

  // Education
  const education = (
    <div key={"edu"} className={`${styles.section} ${styles.education}`}>
      <div className={styles.sectionTitle}>Education</div>
    </div>
  );

  // Projects
  const projects = (
    <div key={"proj"} className={`${styles.section} ${styles.projects}`}>
      <div className={styles.sectionTitle}>Projects</div>
    </div>
  );

  // Achievements
  const achievements = (
    <div key={"achive"} className={`${styles.section} ${styles.achievements}`}>
      <div className={styles.sectionTitle}>Achievements</div>
    </div>
  );

  // Summary
  const summary = (
    <div key={"summ"} className={`${styles.section} ${styles.summary}`}>
      <div className={styles.sectionTitle}>Summary</div>
    </div>
  );

  // Other
  const other = (
    <div key={"other"} className={`${styles.section} ${styles.other}`}>
      <div className={styles.sectionTitle}>Other</div>
    </div>
  );

  useEffect(() => {
    setColumns([
      [workExperience, summary, other],
      [education, projects, achievements],
    ]);
  }, []);

  return (
    <>
      <Header />
      {/* Header */}
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.heading}>Sujanth Sebamalaithasan</h3>
          <p className={styles.subHeading}>Web Application Developer</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            temporibus mollitia officiis sit provident deserunt magni, dolorum
            reiciendis eveniet tenetur soluta eum perferendis quaerat tempora
            voluptatum laboriosam facere dolor dolores quasi delectus cupiditate
            fugit ut? Magni maxime dolorum consequatur tenetur consequuntur
            deleniti, praesentium blanditiis, minus eos architecto, voluptates
            recusandae et rem aperiam repellendus illum doloremque eligendi
            dolor facere veritatis commodi. Vero quae provident illo nobis
            voluptatem sed quisquam, iste neque et itaque, modi sunt dignissimos
            dolor facere adipisci placeat soluta totam facilis, distinctio
            dolorem? Accusantium hic veniam totam distinctio sit consectetur,
            ipsa commodi omnis aspernatur error in qui. Aperiam, fugiat.
          </p>
        </div>
        {/* Links */}
        <div className={styles.links}>
          <span className={styles.link}>
            {" "}
            <FaEnvelope /> sujanth@example.com
          </span>
          <span className={styles.link}>
            <FaMobileAlt /> 0123456789
          </span>
          <span className={styles.link}>
            <FaMapMarkerAlt /> Melbourne, Australia
          </span>
          <span className={styles.link}>
            <FaLinkedinIn /> linkedin/in/username
          </span>
          <span className={styles.link}>
            <FaGithub /> github.com/username
          </span>
        </div>

        <div className={styles.main}>
          <div className={styles.col1}>{columns[0]}</div>
          <div className={styles.col2}>{columns[1]}</div>
        </div>
      </div>
    </>
  );
};

export default ResumeViewer;
