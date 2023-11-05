import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import cn from "classnames";
import { validationSchema } from "../shared/validationSchema";
import { IFormValues } from "../types/types";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import FileInputField from "./FileInputField";
import "./OnboardingForm.css";

const OnboardingForm: React.FC = () => {
  const initialValues: IFormValues = {
    name: "",
    company: "",
    phoneNumber: "",
    email: "",
    commentaryOrFileInput: {},
  };

  const [formChanged, setFormChanged] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSubmit = (values: IFormValues, { resetForm }: any) => {
    console.log(values);
    resetForm(); // Reset the form inputs
    setFormChanged(false); // Reset the form changed state
  };

  const handleFormChange = () => {
    if (!formChanged) {
      setFormChanged(true);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur={true}
    >
      {({ isValid }) => (
        <Form className="form" onChange={handleFormChange}>
          <h1 className="form__title">Сообщение в свободной форме</h1>
          <Field as={InputField} label="Ваше имя" name="name" />
          <Field as={InputField} label="Компания" name="company" />
          <Field
            as={InputField}
            label="Телефон"
            name="phoneNumber"
            type="tel"
            inputMode="tel"
          />
          <Field as={InputField} label="Электронная почта" name="email" />
          <Field
            as={TextareaField}
            label="Напишите текст обращения"
            name="commentaryOrFileInput.commentary"
          />
          <Field
            as={FileInputField}
            label="или прикрепите файл"
            name="commentaryOrFileInput.fileInput"
          />
          <ErrorMessage name="commentaryOrFileInput" component="span" />
          <div className="submit-container">
            <button
              onClick={() => setIsChecked(!isChecked)}
              className={cn("submit-container__checkbox", {
                active: isChecked,
              })}
              type="button"
            />
            <p className="submit-container__text">
              согласен на обработку моих
              <p className="submit-container__text_highlighted">
                персональных данных
              </p>
            </p>
            <button
              className="button"
              type="submit"
              disabled={!isValid || !formChanged}
            >
              Отправить
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default OnboardingForm;
