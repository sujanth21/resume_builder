import React from "react";
import { InputControl, TextAreaControl } from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const Projects = ({ values, setValues }) => {
  return (
    <>
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label='Title'
            placeholder='Enter title eg. Resume app'
            value={values?.title}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>

        <label>Enter project description</label>
        <TextAreaControl
          placeholder='Enter short description'
          value={values?.description}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        ></TextAreaControl>

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
      </div>
    </>
  );
};

export default Projects;
