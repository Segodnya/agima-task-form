import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введите имя"),
  company: Yup.string().required("Введите название компании"),
  phoneNumber: Yup.string()
    .required("Введите номер телефона")
    .matches(
      /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "Укажите корректный номер телефона"
    ),
  email: Yup.string()
    .email("Укажите корректный адрес электронной почты")
    .required("Введите адрес электронной почты"),
  ommentaryOrFileInput: Yup.mixed().test(
    "commentary-or-file-input",
    "Добавьте комментарий или загрузите файл",
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
