import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import style from "./Login.module.css";
import { loginSchema } from "../../schemas/loginSchema";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
const baseUrl = "http://localhost:3000/users";
const navigate=useNavigate();
  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
        let res=await axios(baseUrl);
        let users = res.data;

        let existUser=users.find((user)=>user.username == username && user.password === password);

      if(existUser){
        await axios.put(`${baseUrl}/${existUser.id}`,{...existUser,isLogined:true,});
        toast.success("Successfully logged in");
        navigate('/');
        resetForm();
      }else{
        toast.warn('Username or Password incorrect');
      }
      
    },
    validationSchema: loginSchema,
  });

  const { username, password } = values;
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2>Login</h2>

        <div className={style.inputGroup}>
          <label htmlFor="username">Username</label>
          {errors ? (
            <span className={style.error}>{errors.username}</span>
          ) : null}
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleChange}
          />
        </div>

        <div className={style.inputGroup}>
          <label htmlFor="password">Password</label>
          {errors ? (
            <span className={style.error}>{errors.password}</span>
          ) : null}
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <p >Don't you have account? <Link to={'/register'} style={{color:'blue'}}>Sign Up</Link></p>
        <button type="submit" className={style.login_btn}>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
