import React from "react";
import { useField } from "formik";
import InputMask from "react-input-mask";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      {props.name === "phoneNumber" ? (
        <InputMask mask="+7 (999) 999-99-99" {...field} {...props} />
      ) : (
        <input {...field} {...props} />
      )}
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  );
};

export default InputField;
