import * as Yup from "yup";

const RegisterSchema = Yup.object({
    name: Yup.string().min(5).max(10).required(),

    surname: Yup.string().min(5).max(10).required(),
    username: Yup.string().min(1).max(15).lowercase().required(),

    email: Yup.string().email("Invalid email address").required(),
    password: Yup.string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmpassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

export default RegisterSchema;