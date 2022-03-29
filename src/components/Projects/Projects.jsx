import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const Projects = ({ values, setValues }) => {
  const handlePointUpdate = (value, index) => {
    const temp = { ...values };
    if (!Array.isArray(temp.points)) temp.points = [];
    temp.points[index] = value;
    setValues(temp);
  };

  return (
    <>
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label='Title'
            placeholder='Enter title eg. Chat app'
            value={values?.title}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <InputControl
          label='Overview'
          placeholder='Enter basic overview of project'
          value={values?.overview}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, overview: e.target.value }))
          }
        />

        <div className={styles.row}>
          <InputControl
            label='Deployed Link'
            placeholder='Enter deployed link of project'
            value={values?.link}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, link: e.target.value }))
            }
          />
          <InputControl
            label='Github Link'
            placeholder='Enter github link of project'
            value={values?.github}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, github: e.target.value }))
            }
          />
        </div>
        <div className={styles.column}>
          <label>Enter project description</label>
          <InputControl
            placeholder='Line 1'
            value={values?.points ? values.points[0] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 0)}
          />
          <InputControl
            placeholder='Line 2'
            value={values?.points ? values.points[1] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 1)}
          />
          <InputControl
            placeholder='Line 3'
            value={values?.points ? values.points[2] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 2)}
          />
          <InputControl
            placeholder='Line 4'
            value={values?.points ? values.points[3] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 3)}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
