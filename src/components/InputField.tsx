import React, { useState } from "react";
import { useField } from "formik";
import InputMask from "react-input-mask";
import cn from "classnames";
import styles from "./InputField.module.css";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [isFieldFocused, setFieldFocused] = useState(false);
  const [field, meta, helpers] = useField(props);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) {
      props.onBlur(e);
    }

    helpers.setTouched(true);
  };

  return (
    <>
      <div className={styles.container}>
        <label
          htmlFor={field.name}
          className={cn(styles.label, {
            [styles.focused]: isFieldFocused,
          })}
        >
          {label}
        </label>
        {props.name === "phoneNumber" ? (
          <InputMask
            mask="+7 (999) 999-99-99"
            {...field}
            {...props}
            className={cn(styles.input, styles.field)}
            onFocus={() => {
              setFieldFocused(true);
            }}
            onBlur={(e) => {
              setFieldFocused(false);
              handleBlur(e);
            }}
          />
        ) : (
          <input
            {...field}
            {...props}
            className={cn(styles.input, styles.field)}
            onFocus={() => {
              setFieldFocused(true);
            }}
            onBlur={(e) => {
              setFieldFocused(false);
              handleBlur(e);
            }}
          />
        )}
      </div>
      {meta.touched && meta.error && (
        <span className={styles.error}>{meta.error}</span>
      )}
    </>
  );
};

export default InputField;
