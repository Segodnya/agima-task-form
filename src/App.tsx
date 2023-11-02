import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationSchema } from "./shared/validationSchema";
import { IFormValues } from "./types/types";
import InputField from "./components/InputField";
import TextareaField from "./components/TextareaField";
import FileInputField from "./components/FileInputField";

const App: React.FC = () => {
  const initialValues: IFormValues = {
    name: "",
    company: "",
    phoneNumber: "",
    email: "",
    commentaryOrFileInput: {},
  };

  const handleSubmit = (values: IFormValues) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={true}
      >
        <Form>
          <Field as={InputField} label="Name" name="name" />
          <Field as={InputField} label="Company" name="company" />
          <Field
            as={InputField}
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            inputMode="tel"
          />
          <Field as={InputField} label="Email" name="email" />
          <Field
            as={TextareaField}
            label="Commentary"
            name="commentaryOrFileInput.commentary"
          />
          <Field
            as={FileInputField}
            label="File Input"
            name="commentaryOrFileInput.fileInput"
          />
          <ErrorMessage name="name" component="span" />
          <ErrorMessage name="company" component="span" />
          <ErrorMessage name="phoneNumber" component="span" />
          <ErrorMessage name="email" component="span" />
          <ErrorMessage name="commentaryOrFileInput" component="span" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
