import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";

import ResumeEditor from "../ResumeEditor/ResumeEditor";

import styles from "./Builder.module.css";
import Header from "../Header/Header";
import UseLocalStorage from "../../hooks/useLocalStorage";
import Footer from "../Footer/Footer";
import AnimatedPage from "../AnimatedPage/AnimatedPage";

const Builder = () => {
  const colors = ["#20A4F3", "#32936F", "#9C528B", "#FC814A", "#01172F"];

  const resumeSections = {
    basicInfo: "Basic Info",
    summary: "Summary",
    workExp: "Work Experience",
    education: "Education",
    achievements: "Achievements",
    project: "Projects",
    other: "Organizations",
  };

  const [resumeData, setResumeData] = UseLocalStorage("resumeData", {
    [resumeSections.basicInfo]: {
      id: resumeSections.basicInfo,
      sectionTitle: resumeSections.basicInfo,
      details: {},
    },
    [resumeSections.summary]: {
      id: resumeSections.summary,
      sectionTitle: resumeSections.summary,
      details: "",
    },
    [resumeSections.workExp]: {
      id: resumeSections.workExp,
      sectionTitle: resumeSections.workExp,
      details: [],
    },
    [resumeSections.education]: {
      id: resumeSections.education,
      sectionTitle: resumeSections.education,
      details: [],
    },
    [resumeSections.achievements]: {
      id: resumeSections.achievements,
      sectionTitle: resumeSections.achievements,
      details: [],
    },
    [resumeSections.project]: {
      id: resumeSections.project,
      sectionTitle: resumeSections.project,
      details: [],
    },
    [resumeSections.other]: {
      id: resumeSections.other,
      sectionTitle: resumeSections.other,
      details: [],
    },
  });

  const [activeColor, setActiveColor] = useState(colors[0]);

  useEffect(() => {
    console.log(resumeData);
    // Need to use local storage to store resume data
  }, [resumeData]);

  return (
    <AnimatedPage>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.heading}>ReBuild Your Future</h2>

        <div className={styles.toolbar}>
          <div className={styles.colors}>
            {colors.map((color) => {
              return (
                <span
                  key={color}
                  className={`${styles.color} ${
                    activeColor === color ? styles.active : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setActiveColor(color)}
                />
              );
            })}
          </div>
          <div className={styles.btnContainer}>
            <Link
              to='/resume'
              className={styles.btn}
              state={{
                resumeData: resumeData,
                sections: resumeSections,
                activeColor: activeColor,
              }}
            >
              Preview Resume <FaFilePdf />
            </Link>
          </div>
        </div>
        <div className={styles.main}>
          <ResumeEditor
            sections={resumeSections}
            resumeData={resumeData}
            setData={setResumeData}
          />
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
};

export default Builder;
