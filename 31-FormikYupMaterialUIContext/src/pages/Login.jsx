import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
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
import LoginSchema from "../schema/LoginSchema";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      (user) =>
        user.username === values.username && user.password === values.password
    );

    if (!matchedUser) {
      toast.error("Invalid username or password");
      setSubmitting(false);
      return;
    }

    localStorage.setItem("username", matchedUser.username);
    localStorage.setItem("isLoggedIn", "true");
    toast.success("Login successful");
    setSubmitting(false);
    navigate("/");
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
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
            <h2 className={style.formHeading}>Login</h2>

            <Field
              name="username"
              as={TextField}
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              className={style.formField}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
            />

            <FormControl
              fullWidth
              variant="outlined"
              margin="normal"
              className={style.formPassword}
              error={touched.password && Boolean(errors.password)}
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
                className={style.formInput}
              />
              {touched.password && errors.password && (
                <FormHelperText className={style.helperText}>
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={style.formButton}
              disabled={isSubmitting}
              style={{ backgroundColor: " #00796b" }}
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </Box>
  );
};

export default Login;
