import React from "react";
import UseLocalStorage from "../../hooks/useLocalStorage";

import { InputControl } from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const BasicInfo = ({ values, setValues }) => {
  return (
    <>
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label='First Name'
            placeholder='Enter your first name'
            value={values?.firstName}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
          <InputControl
            label='Last Name'
            placeholder='Enter your last name'
            value={values?.lastName}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
          <InputControl
            label='Job Title'
            placeholder='Enter your job title'
            value={values?.title}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label='Linkedin Link'
            placeholder='Enter your linkedin profile link'
            value={values?.linkedin}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, linkedin: e.target.value }))
            }
          />
          <InputControl
            label='Github Link'
            placeholder='Enter your github profile link'
            value={values?.github}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, github: e.target.value }))
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label='Email'
            placeholder='Enter your email'
            value={values?.email}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <InputControl
            label='Enter phone'
            placeholder='Enter your phone number'
            value={values?.phone}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
          <InputControl
            label='Address'
            placeholder='Enter your address (Suburb, City)'
            value={values?.address}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, address: e.target.value }))
            }
          />
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
