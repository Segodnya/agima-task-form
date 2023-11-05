import React, { useState } from "react";
import { useField } from "formik";
import styles from "./TextareaField.module.css";
import cn from "classnames";

interface TextareaFieldProps {
  label: string;
  name: string;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ label, ...props }) => {
  const [isFieldFocused, setFieldFocused] = useState(false);
  const [field, meta, helpers] = useField(props);

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
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
        <textarea
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
      </div>
      {meta.touched && meta.error && (
        <span className={styles.error}>{meta.error}</span>
      )}
    </>
  );
};

export default TextareaField;
