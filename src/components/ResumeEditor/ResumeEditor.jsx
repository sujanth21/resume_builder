import React, { useState } from "react";
import BasicInfo from "../BasicInfo/BasicInfo";
import WorkExperience from "../WorkExperience/WorkExperience";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import Achievements from "../Achievements/Achievements";
import SummaryDetails from "../SummaryDetails/SummaryDetails";
import OtherDetails from "../OtherDetails/OtherDetails";

import { otherBody } from "../../data/formFieldData";
import InputControl from "../InputControl/InputControl";

import styles from "./ResumeEditor.module.css";

const ResumeEditor = ({ sections }) => {
  const firstSectionKey = Object.keys(sections)[0];
  const [activeSectionKey, setActiveSectionKey] = useState(firstSectionKey);

  const onSetActiveKeyHandler = (key) => {
    setActiveSectionKey(key);
  };

  const generateFields = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return <BasicInfo />;
      case sections.workExp:
        return <WorkExperience />;
      case sections.project:
        return <Projects />;
      case sections.education:
        return <Education />;
      case sections.achievements:
        return <Achievements />;
      case sections.summary:
        return <SummaryDetails />;
      case sections.other:
        return <OtherDetails />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections).map((section) => {
          return (
            <div
              className={`${styles.section} ${
                activeSectionKey === section ? styles.active : ""
              }`}
              key={section}
              onClick={() => onSetActiveKeyHandler(section)}
            >
              {sections[section]}
            </div>
          );
        })}
      </div>
      <div className={styles.body}>
        <InputControl label='Section Title' placeholder='Enter section title' />
        {generateFields()}
      </div>
    </div>
  );
};

export default ResumeEditor;
