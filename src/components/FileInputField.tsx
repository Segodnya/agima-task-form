import React, { useState } from "react";
import { useField } from "formik";
import styles from "./FileInputField.module.css";

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
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

    // Update the selected file
    setSelectedFile(file);

    // Update the selected file name
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleFileDelete = () => {
    setSelectedFile(null);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
        {selectedFile && (
          <span>
            {" "}
            {selectedFile.name}{" "}
            <button className={styles.button} onClick={handleFileDelete} />
          </span>
        )}
      </label>
      <input
        type="file"
        id={name}
        name={name}
        onChange={handleChange}
        style={{ display: "none" }} // Hide the file input element
      />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );
};

export default FileInputField;
