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
import UseLocalStorage from "../../hooks/useLocalStorage";
import AnimatedPage from "../AnimatedPage/AnimatedPage";

const ResumeViewer = forwardRef((props, ref) => {
  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const location = useLocation();
  const { sections, activeColor } = location.state;

  const [resumeData, setResumeData] = UseLocalStorage("resumeData");

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

  const fullName =
    data.basicInfo?.details?.firstName &&
    `${data.basicInfo?.details?.firstName} ${data.basicInfo?.details?.lastName}`;
  const email = data.basicInfo?.details?.email;
  const mobile = data.basicInfo?.details?.phone;
  const address = data.basicInfo?.details?.address;
  const linkedIn = data.basicInfo?.details?.linkedin;
  const gitHub = data.basicInfo?.details?.github;

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
        draggable='true'
        onDragOver={() => seTarget(data.workExperience?.id)}
        onDragEnd={() => setSource(data.workExperience?.id)}
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
              <div className={styles.item} key={exp.title}>
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
        draggable='true'
        onDragOver={() => seTarget(data.projects?.id)}
        onDragEnd={() => setSource(data.projects?.id)}
        className={`${styles.section} ${styles.projects} ${
          data?.projects?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{data?.projects.sectionTitle}</div>
        <div className={styles.content}>
          {data?.projects?.details.map((proj, index) => {
            return (
              <div className={styles.item} key={proj.title}>
                {proj.title && <p className={styles.title}>{proj.title}</p>}

                {proj.description && (
                  <p className={styles.description}>{proj.description}</p>
                )}
                <div className={styles.spaceBetween}>
                  {proj.link && (
                    <p>
                      Deployed URL:
                      <br />
                      <a target='_blank' href={proj.link}>
                        {proj.link}
                      </a>
                    </p>
                  )}

                  {proj.github && (
                    <p>
                      Project Source:
                      <br />
                      <a target='_blank' href={proj.github}>
                        {proj.github}
                      </a>{" "}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"edu"}
        draggable='true'
        onDragOver={() => seTarget(data.education?.id)}
        onDragEnd={() => setSource(data.education?.id)}
        className={`${styles.section} ${styles.education} ${
          data?.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{data.education.sectionTitle}</div>
        <div className={styles.content}>
          {data.education?.details.map((edu, index) => {
            return (
              <div className={styles.item} key={edu.title}>
                {edu.title && <p className={styles.title}>{edu.title}</p>}
                {edu.institution && (
                  <p className={styles.subTitle}>{edu.institution}</p>
                )}

                {edu.startDate && edu.endDate ? (
                  <div className={styles.spaceBetween}>
                    <span className={styles.period}>
                      {getFormattedDate(edu.startDate)} -{" "}
                      {getFormattedDate(edu.endDate)}
                    </span>
                    {edu.country && (
                      <span className={styles.location}>{edu.country}</span>
                    )}
                  </div>
                ) : edu.country ? (
                  <span className={styles.location}>{edu.country}</span>
                ) : (
                  ""
                )}

                <p className={styles.subTitleItalic}>Relevant Subjects:</p>
                {edu.points.length > 0 && (
                  <ul className={styles.subjects}>
                    {edu.points?.map((sub, index) => {
                      return (
                        <li className={styles.subject} key={index}>
                          {sub}
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
    [sections.achievements]: (
      <div
        key={"achive"}
        draggable='true'
        onDragOver={() => seTarget(data.achievements?.id)}
        onDragEnd={() => setSource(data.achievements?.id)}
        className={`${styles.section} ${styles.achievements} ${
          data?.achievements?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {data.achievements.sectionTitle}
        </div>
        <div className={styles.content}>
          {data.achievements?.details.map((achi, index) => {
            return (
              <div className={styles.item} key={achi.achievement}>
                {achi.achievement && (
                  <p className={styles.subTitle}>{achi.achievement}</p>
                )}

                {achi.description && (
                  <p className={styles.description}>{achi.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summ"}
        draggable='true'
        onDragOver={() => seTarget(data.summary?.id)}
        onDragEnd={() => setSource(data.summary?.id)}
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
        draggable='true'
        onDragOver={() => seTarget(data.other?.id)}
        onDragEnd={() => setSource(data.other?.id)}
        className={`${styles.section} ${styles.other} ${
          data?.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{data.other?.sectionTitle}</div>

        <div className={styles.content}>
          {data.other?.details.map((org) => {
            return (
              <div className={styles.item} key={org.organization}>
                {org.organization && (
                  <p className={styles.subTitle}>{org.organization}</p>
                )}

                {org.involvement && (
                  <p className={styles.description}>{org.involvement}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [[sections.workExp], [sections.project]],
      [[sections.education], [sections.achievements], [sections.other]],
    ]);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!activeColor || !container) return;

    container.style.setProperty("--color", activeColor);
  }, [activeColor]);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  return (
    <AnimatedPage>
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
            <h3 className={styles.heading}>{fullName}</h3>
            <p className={styles.subHeading}>
              {data.basicInfo && data.basicInfo?.details?.title}
            </p>
            <p>{data.summary && data.summary?.detail}</p>
          </div>
          {/* Links */}
          {(email || mobile || address || gitHub || linkedIn) && (
            <div className={styles.links}>
              {email && (
                <span className={styles.link}>
                  {" "}
                  <FaEnvelope /> {email}
                </span>
              )}
              {mobile && (
                <span className={styles.link}>
                  <FaMobileAlt /> {mobile}
                </span>
              )}
              {address && (
                <span className={styles.link}>
                  <FaMapMarkerAlt /> {address}
                </span>
              )}
              {linkedIn && (
                <span className={styles.link}>
                  <FaLinkedinIn /> {linkedIn}
                </span>
              )}
              {gitHub && (
                <span className={styles.link}>
                  <FaGithub /> {gitHub}
                </span>
              )}
            </div>
          )}

          <div className={styles.main}>
            <div className={styles.col1}>
              {columns[0].map((item, index) => (
                <div key={index}>{sectionColumn[item]}</div>
              ))}
            </div>
            <div className={styles.col2}>
              {columns[1].map((item, index) => (
                <div key={index}>{sectionColumn[item]}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
});

export default ResumeViewer;
