import * as Yup from "yup";

export const registerSchema = Yup.object({
    name: Yup.string().min(5).required(),

    surname: Yup.string().min(5).required(),
    username: Yup.string().lowercase().required(),

    email: Yup.string().email("Invalid email address").required(),
    password: Yup.string()
        .required()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
