import React from "react";
import { InputControl, TextAreaControl } from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const OtherDetails = ({ values, setValues }) => {
  return (
    <>
      <div className={styles.detail}>
        <InputControl
          label='Organization'
          placeholder='Enter Organization Name'
          value={values?.organization}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, organization: e.target.value }))
          }
        />

        <label>Enter details</label>
        <TextAreaControl
          placeholder='Enter your involvements'
          value={values?.involvement}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              involvement: e.target.value,
            }))
          }
        ></TextAreaControl>
      </div>
    </>
  );
};

export default OtherDetails;
