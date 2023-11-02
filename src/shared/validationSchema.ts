import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
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
