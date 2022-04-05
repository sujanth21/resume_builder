import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
              <div className={styles.item} key={index}>
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
        className={`${styles.section} ${styles.education} ${
          data?.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{data.education.sectionTitle}</div>
        <div className={styles.content}>
          {data.education?.details.map((edu, index) => {
            return (
              <div className={styles.item} key={index}>
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
                {console.log(edu.country)}
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
              <div className={styles.item} key={index}>
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
        className={`${styles.section} ${styles.other} ${
          data?.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>Other</div>
      </div>
    ),
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

  const handleOnDragEnd = (result) => {
    console.log(result);

    const items = Array.from(columns);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setColumns(items);
  };

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

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='resumeItems'>
            {(provided) => (
              <div
                className={styles.main}
                {...props.droppableProps}
                ref={provided.innerRef}
              >
                <div className={styles.col1}>
                  {columns[0].map((item, index) => (
                    <Draggable
                      key={index}
                      draggableId={item + index}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {sectionColumn[item]}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
                <div className={styles.col2}>
                  {columns[1].map((item, index) => (
                    <Draggable
                      key={index}
                      draggableId={item + index}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {sectionColumn[item]}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
});

export default ResumeViewer;
