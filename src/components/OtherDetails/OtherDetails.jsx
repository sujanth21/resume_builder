import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const OtherDetails = ({ values, setValues }) => {
  return (
    <>
      <div className={styles.detail}>
        <InputControl
          label='Other'
          placeholder='Enter something'
          value={values?.other}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, other: e.target.value }))
          }
        />
      </div>
    </>
  );
};

export default OtherDetails;
