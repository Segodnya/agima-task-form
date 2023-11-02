import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "./components/InputField";
import TextareaField from "./components/TextareaField";
import FileInputField from "./components/FileInputField";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .matches(
      /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "Invalid phone number"
    )
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  ommentaryOrFileInput: Yup.mixed().test(
    "commentary-or-file-input",
    "Either commentary or file input should be filled",
    function (value: any) {
      const isEmpty = (obj: any) =>
        [undefined, null, ""].some(
          (val) =>
            val === obj ||
            (typeof obj === "object" && Object.keys(obj).length === 0)
        );

      if (isEmpty(value)) {
        return true;
      }

      return isEmpty(value.commentary) || isEmpty(value.fileInput);
    }
  ),
});

interface FormValues {
  name: string;
  company: string;
  phoneNumber: string;
  email: string;
  commentaryOrFileInput: {
    commentary?: string;
    fileInput?: File;
  };
}

const App: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    company: "",
    phoneNumber: "",
    email: "",
    commentaryOrFileInput: {},
  };

  const handleSubmit = (values: FormValues) => {
    // Handle form submission here
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
            pattern="\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="+7 (___) ___-__-__"
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
