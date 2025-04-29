import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./Login.module.css";

import {
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import RegisterSchema from "../schema/RegisterSchema";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.username === values.username);

    if (userExists) {
      toast.error("Username already exists");
      setSubmitting(false);
      return;
    }

    users.push(values);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isRegistered", "true");
    toast.success("Registration successful");
    setSubmitting(false);
    navigate("/login");
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();
  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({
          errors,
          touched,
          isSubmitting,
          values,
          handleChange,
          handleBlur,
        }) => (
          <Form className={style.formContainer}>
            <h2 className={style.formHeading}>Register</h2>
            <Field
              name="name"
              as={TextField}
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              className={style.formField}
            />
            <Field
              name="surname"
              as={TextField}
              label="Surname"
              variant="outlined"
              fullWidth
              margin="normal"
              error={touched.surname && Boolean(errors.surname)}
              helperText={touched.surname && errors.surname}
            />
            <Field
              name="username"
              as={TextField}
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
            />
            <Field
              name="email"
              as={TextField}
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <FormControl
              fullWidth
              variant="outlined"
              margin="normal"
              error={touched.password && Boolean(errors.password)}
              className={style.formPassword}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {touched.password && errors.password && (
                <FormHelperText>{errors.password}</FormHelperText>
              )}
            </FormControl>

            <Field
              name="confirmpassword"
              as={TextField}
              label="ConfirmPassword"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              error={touched.confirmpassword && Boolean(errors.confirmpassword)}
              helperText={touched.confirmpassword && errors.confirmpassword}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              sx={{
                marginTop: 2,
                paddingY: 1.2,
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                borderRadius: "8px",
              }}
              className={style.formButton}
              style={{ backgroundColor: " #00796b" }}
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </Box>
  );
};

export default Register;
