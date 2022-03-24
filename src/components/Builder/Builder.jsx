import React from "react";
import { FaDownload } from "react-icons/fa";
import ResumeEditor from "../ResumeEditor/ResumeEditor";

import styles from "./Builder.module.css";

const Builder = () => {
  const colors = ["#20A4F3", "#32936F", "#9C528B", "#FC814A", "#01172F"];

  const resumeSections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievements: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  return (
    <div className={styles.container}>
      <p className={styles.heading}>ReBuild Your Future</p>

      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((color) => {
            return (
              <span
                key={color}
                className={styles.color}
                style={{ backgroundColor: color }}
              />
            );
          })}
        </div>
        <button>
          Download Resume <FaDownload />
        </button>
      </div>
      <div className={styles.main}>
        <ResumeEditor sections={resumeSections} />
      </div>
    </div>
  );
};

export default Builder;
