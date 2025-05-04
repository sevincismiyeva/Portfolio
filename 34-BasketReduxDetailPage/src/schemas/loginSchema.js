import * as Yup from "yup";

export const loginSchema = Yup.object({
    username: Yup.string().lowercase().required(),
    password: Yup.string().required(),
});