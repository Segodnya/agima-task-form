import React from "react";
import { useField } from "formik";

interface TextareaFieldProps {
  label: string;
  name: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  );
};

export default TextareaField;
