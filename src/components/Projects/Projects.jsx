import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const Projects = () => {
  return (
    <>
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl label='Title' placeholder='Enter title eg. Chat app' />
        </div>
        <InputControl
          label='Overview'
          placeholder='Enter basic overview of project'
        />
        <div className={styles.row}>
          <InputControl
            label='Deployed Link'
            placeholder='Enter deployed link of project'
          />
          <InputControl
            label='Github Link'
            placeholder='Enter github link of project'
          />
        </div>
        <div className={styles.column}>
          <label>Enter project description</label>
          <InputControl placeholder='Line 1' />
          <InputControl placeholder='Line 2' />
          <InputControl placeholder='Line 3' />
          <InputControl placeholder='Line 4' />
        </div>
      </div>
    </>
  );
};

export default Projects;
