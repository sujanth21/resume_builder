import React, { useEffect, useState } from "react";
import BasicInfo from "../BasicInfo/BasicInfo";
import WorkExperience from "../WorkExperience/WorkExperience";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import Achievements from "../Achievements/Achievements";
import SummaryDetails from "../SummaryDetails/SummaryDetails";
import OtherDetails from "../OtherDetails/OtherDetails";
import InputControl from "../InputControl/InputControl";

import { FaTimes } from "react-icons/fa";

import styles from "./ResumeEditor.module.css";

const ResumeEditor = ({ sections, resumeData, setData }) => {
  const firstSectionKey = Object.keys(sections)[0];
  const [activeSectionKey, setActiveSectionKey] = useState(firstSectionKey);

  const [activeData, setActiveData] = useState(
    resumeData[sections[Object.keys(sections)[0]]]
  );

  const [activeDetailIndex, setActiveDetailIndex] = useState(0);

  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  const [values, setValues] = useState();

  const onSetActiveKeyHandler = (key) => {
    setActiveSectionKey(key);
  };

  const generateFields = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return <BasicInfo values={values} setValues={setValues} />;
      case sections.workExp:
        return <WorkExperience values={values} setValues={setValues} />;
      case sections.project:
        return <Projects values={values} setValues={setValues} />;
      case sections.education:
        return <Education values={values} setValues={setValues} />;
      case sections.achievements:
        return <Achievements values={values} setValues={setValues} />;
      case sections.summary:
        return <SummaryDetails values={values} setValues={setValues} />;
      case sections.other:
        return <OtherDetails values={values} setValues={setValues} />;
      default:
        return null;
    }
  };

  const handleFormSubmission = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const temp = {
          firstName: values.firstName,
          lastName: values.lastName,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
          address: values.address,
        };
        setData((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            details: temp,
            sectionTitle,
          },
        }));

        break;
      }
      case sections.workExp: {
        const temp = {
          title: values.title,
          certificationLink: values.certificationLink,
          companyName: values.companyName,
          startDate: values.startDate,
          endDate: values.endDate,
          location: values.location,
          points: values.points,
        };

        const tempDetails = [...resumeData[sections.workExp]?.details];
        tempDetails[activeDetailIndex] = temp;

        setData((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));

        break;
      }
      case sections.project: {
        const temp = {
          title: values.title,
          link: values.link,
          overview: values.overview,
          github: values.github,
          points: values.points,
        };

        const tempDetails = [...resumeData[sections.project]?.details];
        tempDetails[activeDetailIndex] = temp;

        setData((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));

        break;
      }
      case sections.education: {
        const temp = {
          title: values.title,
          institution: values.institution,
          startDate: values.startDate,
          endDate: values.endDate,
        };

        const tempDetails = [...resumeData[sections.education]?.details];
        tempDetails[activeDetailIndex] = temp;

        setData((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));

        break;
      }
      case sections.achievements: {
        const tempPoints = values.points;

        setData((prev) => ({
          ...prev,
          [sections.achievements]: {
            ...prev[sections.achievements],
            points: tempPoints,
            sectionTitle,
          },
        }));

        break;
      }
      case sections.summary: {
        const tempDetails = values.summary;

        setData((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: tempDetails,
            sectionTitle,
          },
        }));

        break;
      }
      case sections.other: {
        const tempDetails = values.other;

        setData((prev) => ({
          ...prev,
          [sections.other]: {
            ...prev[sections.other],
            detail: tempDetails,
            sectionTitle,
          },
        }));

        break;
      }
    }
  };

  useEffect(() => {
    const activeData = resumeData[sections[activeSectionKey]];
    setActiveData(activeData);
    setSectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);
    setValues({
      firstName: activeData.details?.firstName || "",
      lastName: activeData.details?.lastName || "",
      title: activeData.details
        ? activeData.details[0]?.title || ""
        : activeData.details?.title || "",
      linkedin: activeData.details?.linkedin || "",
      github: activeData.details
        ? activeData.details[0]?.github || ""
        : activeData.details?.github || "",
      phone: activeData.details?.phone || "",
      email: activeData.details?.email || "",
      address: activeData.details?.address || "",
      overview: activeData.details ? activeData.details[0]?.overview || "" : "",
      link: activeData.details ? activeData.details[0]?.link || "" : "",
      startDate: activeData.details
        ? activeData.details[0]?.startDate || ""
        : "",
      endDate: activeData.details ? activeData.details[0]?.endDate || "" : "",
      certificationLink: activeData.details
        ? activeData.details[0]?.certificationLink || ""
        : "",
      points: activeData.details
        ? activeData.details[0]?.points
          ? [...activeData.details[0]?.points]
          : ""
        : activeData?.points
        ? [...activeData.points]
        : "",
      summary: typeof activeData?.detail !== "object" ? activeData.detail : "",
      other: typeof activeData?.detail !== "object" ? activeData.detail : "",
    });
  }, [activeSectionKey]);

  const onHandleSectionTitle = (e) => {
    setSectionTitle(e.target.value);
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
        <InputControl
          label='Section Title'
          placeholder='Enter section title'
          value={sectionTitle}
          onChange={onHandleSectionTitle}
        />

        <div className={styles.tabs}>
          {activeData && activeData.details?.length > 0
            ? activeData.details.map((item, index) => {
                return (
                  <div
                    className={`${styles.tab} ${
                      activeDetailIndex === index ? styles.active : ""
                    }`}
                    key={item.title + index}
                    onClick={() => setActiveDetailIndex(index)}
                  >
                    <p>
                      {sections[activeSectionKey]} {index + 1}
                    </p>
                    <FaTimes />
                  </div>
                );
              })
            : ""}
        </div>
        {generateFields()}
        <button className={styles.btn} onClick={handleFormSubmission}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ResumeEditor;
