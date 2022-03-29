import React, { useEffect, useState } from "react";
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

  const [resumeData, setResumeData] = useState({
    [resumeSections.basicInfo]: {
      id: resumeSections.basicInfo,
      sectionTitle: resumeSections.basicInfo,
      details: {},
    },
    [resumeSections.workExp]: {
      id: resumeSections.workExp,
      sectionTitle: resumeSections.workExp,
      details: [],
    },
    [resumeSections.project]: {
      id: resumeSections.project,
      sectionTitle: resumeSections.project,
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
      points: [],
    },
    [resumeSections.summary]: {
      id: resumeSections.summary,
      sectionTitle: resumeSections.summary,
      details: "",
    },
    [resumeSections.other]: {
      id: resumeSections.other,
      sectionTitle: resumeSections.other,
      details: "",
    },
  });

  useEffect(() => {
    console.log(resumeData);
  }, [resumeData]);

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
        <ResumeEditor
          sections={resumeSections}
          resumeData={resumeData}
          setData={setResumeData}
        />
      </div>
    </div>
  );
};

export default Builder;
