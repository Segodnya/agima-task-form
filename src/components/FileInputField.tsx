// FileInputField.tsx
import React from "react";
import { useField } from "formik";

interface FileInputFieldProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInputField: React.FC<FileInputFieldProps> = ({
  label,
  name,
  onChange,
}) => {
  const [, meta] = useField(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files && e.currentTarget.files[0];
    const value = file || null;

    // Create a custom event object
    const event = {
      target: {
        name,
        value,
      },
    };

    // Convert the event object to "unknown" first, and then cast it to "ChangeEvent<HTMLInputElement>"
    onChange(event as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type="file" id={name} name={name} onChange={handleChange} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  );
};

export default FileInputField;
