import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const Education = () => {
  return (
    <>
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl label='Title' placeholder='Enter title eg. B-tech' />
        </div>
        <InputControl
          label='College/School Name'
          placeholder='Enter name of your college/school'
        />
        <div className={styles.row}>
          <InputControl
            label='Start Date'
            type='date'
            placeholder='Enter start date of this education'
          />
          <InputControl
            label='End Date'
            type='date'
            placeholder='Enter end date of this education'
          />
        </div>
      </div>
    </>
  );
};

export default Education;
