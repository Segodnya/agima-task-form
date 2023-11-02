export interface IFormValues {
  name: string;
  company: string;
  phoneNumber: string;
  email: string;
  commentaryOrFileInput: {
    commentary?: string;
    fileInput?: File;
  };
}
