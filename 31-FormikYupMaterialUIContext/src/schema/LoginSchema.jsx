import * as Yup from "yup";

const LoginSchema = Yup.object({
    username: Yup.string().min(1).max(15).lowercase().required(),
    password: Yup.string()
          .required()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
  });

  export default LoginSchema;