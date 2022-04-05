import React from "react";
import { InputControl } from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const Education = ({ values, setValues }) => {
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
            placeholder='Enter title eg. BSc in IT'
            value={values?.title}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label='Institution Name'
            placeholder='Enter name of your institution'
            value={values?.institution}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, institution: e.target.value }))
            }
          />
          <InputControl
            label='Location'
            placeholder='Enter location eg. Australia'
            value={values?.country}
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                country: e.target.value,
              }))
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label='Start Date'
            type='date'
            placeholder='Enter start date of this education'
            value={values?.startDate}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, startDate: e.target.value }))
            }
          />
          <InputControl
            label='End Date'
            type='date'
            placeholder='Enter end date of this education'
            value={values?.endDate}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, endDate: e.target.value }))
            }
          />
        </div>

        <div className={styles.column}>
          <label>Enter relevant subjects</label>
          <InputControl
            placeholder='Subject 1'
            value={values?.points ? values.points[0] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 0)}
          />
          <InputControl
            placeholder='Subject 2'
            value={values?.points ? values.points[1] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 1)}
          />
          <InputControl
            placeholder='Subject 3'
            value={values?.points ? values.points[2] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 2)}
          />
          <InputControl
            placeholder='Subject 4'
            value={values?.points ? values.points[3] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 3)}
          />
          <InputControl
            placeholder='Subject 5'
            value={values?.points ? values.points[4] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 4)}
          />
        </div>
      </div>
    </>
  );
};

export default Education;
