import React from "react";

import InputControl from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const BasicInfo = () => {
  return (
    <>
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label='First Name'
            placeholder='Enter your first name'
          />
          <InputControl label='Last Name' placeholder='Enter your last name' />
          <InputControl label='Job Title' placeholder='Enter your job title' />
        </div>
        <div className={styles.row}>
          <InputControl
            label='Linkedin Link'
            placeholder='Enter your linkedin profile link'
          />
          <InputControl
            label='Github Link'
            placeholder='Enter your github profile link'
          />
        </div>
        <div className={styles.row}>
          <InputControl label='Email' placeholder='Enter your email' />
          <InputControl
            label='Enter phone'
            placeholder='Enter your phone number'
          />
          <InputControl
            label='Address'
            placeholder='Enter your address (Suburb, City)'
          />
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
