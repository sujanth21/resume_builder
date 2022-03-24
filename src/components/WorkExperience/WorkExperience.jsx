import React from "react";

import InputControl from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const WorkExperience = () => {
  return (
    <>
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label='Title'
            placeholder='Enter title eg. Frontend developer'
          />
          <InputControl
            label='Company Name'
            placeholder='Enter company name eg. amazon'
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label='Certificate Link'
            placeholder='Enter certificate link'
          />
          <InputControl
            label='Location'
            placeholder='Enter location eg. Remote'
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label='Start Date'
            type='date'
            placeholder='Enter start date of work'
          />
          <InputControl
            label='End Date'
            type='date'
            placeholder='Enter end date of work'
          />
        </div>

        <div className={styles.column}>
          <label>Enter work description</label>
          <InputControl placeholder='Line 1' />
          <InputControl placeholder='Line 2' />
          <InputControl placeholder='Line 3' />
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
