import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import Header from "../Header/Header";
import styles from "./ResumeViewer.module.css";

import {
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const ResumeViewer = forwardRef((props, ref) => {
  const [columns, setColumns] = useState([[], []]);
  const [drag, setDrag] = useState("");
  const [drop, setDrop] = useState("");

  const location = useLocation();
  const { resumeData, sections, activeColor } = location.state;

  const containerRef = useRef();

  // console.log(`Resume Data: ${resumeData} Sections: ${sections}`);

  const data = {
    workExperience: resumeData[sections.workExp],
    education: resumeData[sections.education],
    achievements: resumeData[sections.achievements],
    projects: resumeData[sections.project],
    basicInfo: resumeData[sections.basicInfo],
    summary: resumeData[sections.summary],
    other: resumeData[sections.other],
  };

  const getFormattedDate = (formDate) => {
    if (!formDate) return "";

    const date = new Date(formDate);

    return `${date.getDate()}/${
      date.getMonth() + 1 > 9 ? "0" + date.getMonth() : date.getMonth() + 1
    }/${date.getFullYear()}`;
  };

  const sectionColumn = {
    [sections.workExp]: (
      <div
        key={"workExp"}
        draggable={true}
        onDragOver={() => setDrop(data.workExperience?.id)}
        onDragEnd={() => setDrag(data.workExperience?.id)}
        className={`${styles.section} ${styles.workExperience} ${
          data?.workExperience?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {data.workExperience.sectionTitle}
        </div>
        <div className={styles.content}>
          {data.workExperience?.details.map((exp, index) => {
            return (
              <div className={styles.item}>
                {exp.title && <p className={styles.title}>{exp.title}</p>}
                {exp.companyName && (
                  <p className={styles.subTitle}>{exp.companyName}</p>
                )}
                {exp.startDate && exp.endDate ? (
                  <div className={styles.spaceBetween}>
                    <span className={styles.period}>
                      {getFormattedDate(exp.startDate)} -{" "}
                      {getFormattedDate(exp.endDate)}
                    </span>
                    {exp.location && (
                      <span className={styles.location}>{exp.location}</span>
                    )}
                  </div>
                ) : exp.location ? (
                  <span className={styles.location}>{exp.location}</span>
                ) : (
                  ""
                )}

                {exp.description && (
                  <p className={styles.description}>{exp.description}</p>
                )}

                <p className={styles.subTitleItalic}>Achivements / Tasks</p>
                {exp.points.length > 0 && (
                  <ul className={styles.points}>
                    {exp.points?.map((task, index) => {
                      return (
                        <li className={styles.point} key={index}>
                          &#126; {task}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"proj"}
        draggable={true}
        onDragOver={() => setDrop(data.projects?.id)}
        onDragEnd={() => setDrag(data.projects?.id)}
        className={`${styles.section} ${styles.projects} ${
          data?.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>Projects</div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"edu"}
        draggable={true}
        onDragOver={() => setDrop(data.education?.id)}
        onDragEnd={() => setDrag(data.education?.id)}
        className={`${styles.section} ${styles.education} ${
          data?.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{data.education.sectionTitle}</div>
        <div className={styles.content}>
          <div className={styles.item}>
            <p className={styles.title}>
              Master of Information Technology (System Analysis)
            </p>
            <p className={styles.subTitle}>Charles Sturt University</p>
            <div className={styles.spaceBetween}>
              <span className={styles.period}>02/2013 – 12/2014</span>
              <span className={styles.location}>Melbourne</span>
            </div>
            <p className={styles.subTitleItalic}>Relevant Subjects:</p>
            <ul className={styles.subjects}>
              <li className={styles.subject}>
                Programming Principles (Python)
              </li>
              <li className={styles.subject}>Object Modelling</li>
              <li className={styles.subject}>System Analysis and Designs</li>
              <li className={styles.subject}>
                Web Based Information System (JSP & Servlets)
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    [sections.achievements]: (
      <div
        key={"achive"}
        draggable={true}
        onDragOver={() => setDrop(data.achievements?.id)}
        onDragEnd={() => setDrag(data.achievements?.id)}
        className={`${styles.section} ${styles.achievements} ${
          data?.achievements?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {data.achievements.sectionTitle}
        </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <p className={styles.subTitle}>
              Academic Achievement Award for attaining a GPA of 6.33 out of 7.0
              (Master of Information Technology - Overall Results) (2014)
            </p>
            <p className={styles.description}>
              High Distinction in Programming Principles (Python), System
              Analysis, Database Systems, Object Modelling, Introduction to
              Information Technology, Computer Management & Security
            </p>
          </div>
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summ"}
        draggable={true}
        onDragOver={() => setDrop(data.summary?.id)}
        onDragEnd={() => setDrag(data.summary?.id)}
        className={`${styles.section} ${styles.summary} ${
          data?.summary?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>Summary</div>
      </div>
    ),
    [sections.other]: (
      <div
        key={"other"}
        draggable={true}
        onDragOver={() => setDrop(data.other?.id)}
        onDragEnd={() => setDrag(data.other?.id)}
        className={`${styles.section} ${styles.other} ${
          data?.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>Other</div>
      </div>
    ),
  };

  const swapDragDrop = (drag, drop) => {
    if (!drag || !drop) return;

    const tempColumns = [[...columns[0]], [...columns[1]]];

    let dragRowIndex = tempColumns[0].findIndex((item) => item === drag);
    let dragColumnIndex = 0;

    if (dragRowIndex < 0) {
      dragColumnIndex = 1;
      dragRowIndex = tempColumns[1].findIndex((item) => item === drag);
    }

    let dropRowIndex = tempColumns[0].findIndex((item) => item === drop);
    let dropColumnIndex = 0;

    if (dropRowIndex < 0) {
      dropColumnIndex = 1;
      dropRowIndex = tempColumns[1].findIndex((item) => item === drop);
    }

    const tempDrag = tempColumns[dragColumnIndex][dragRowIndex];

    tempColumns[dragColumnIndex][dragRowIndex] =
      tempColumns[dropColumnIndex][dropRowIndex];

    tempColumns[dropColumnIndex][dropRowIndex] = tempDrag;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [[sections.workExp], [sections.project]],
      [[sections.education], [sections.achievements], [sections.other]],
    ]);
  }, []);

  useEffect(() => {
    swapDragDrop(drag, drop);
  }, [drag]);

  useEffect(() => {
    const container = containerRef.current;
    if (!activeColor || !container) return;

    container.style.setProperty("--color", activeColor);
  }, [activeColor]);

  return (
    <div ref={ref} className={styles.rootContainer}>
      <Header />
      {/* Header */}
      <ReactToPrint
        trigger={() => {
          return (
            <button id={styles.downloadBtn} className={styles.btn}>
              Download Resume <FaDownload />
            </button>
          );
        }}
        content={() => {
          return containerRef.current;
        }}
      />
      <div ref={containerRef} className={styles.container}>
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
          <div className={styles.col1}>
            {columns[0].map((item) => sectionColumn[item])}
          </div>
          <div className={styles.col2}>
            {columns[1].map((item) => sectionColumn[item])}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ResumeViewer;
