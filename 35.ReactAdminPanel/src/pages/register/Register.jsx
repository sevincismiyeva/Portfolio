import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import style from "./Register.module.css";
import { registerSchema } from "../../schemas/registerSchema";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const baseUrl = "http://localhost:3000/users";
  let navigate=useNavigate();
  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      isLogined: false,
    },

    onSubmit: async (values) => {
        let res=await axios(baseUrl);
        let users = res.data;

        let existUser=users.find((user)=>user.username == username || user.email === email);

        if(!existUser){
            await axios.post(baseUrl, values);
            toast.success("Registered successfully");
            resetForm();
            navigate('/login');
        }else{
            toast.error("User already exist")
        }
      
    },
    validationSchema: registerSchema,
  });

  const { name, surname, username, email, password, confirmPassword } = values;
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2>Register</h2>

        <div className={style.inputGroup}>
          <label htmlFor="name">Name</label>
          {errors ? <span className={style.error}>{errors.name}</span> : null}
          <input type="text" id="name" value={name} onChange={handleChange} />
        </div>

        <div className={style.inputGroup}>
          <label htmlFor="surname">Surname</label>
          {errors ? (
            <span className={style.error}>{errors.surname}</span>
          ) : null}
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={handleChange}
          />
        </div>

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
          <label htmlFor="email">Email</label>
          {errors ? <span className={style.error}>{errors.email}</span> : null}
          <input
            type="email"
            id="email"
            value={email}
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

        <div className={style.inputGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          {errors ? (
            <span className={style.error}>{errors.confirmPassword}</span>
          ) : null}
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>

<p >Already have account <Link to={'/login'} style={{color:'blue'}}>Sign In</Link></p>
        <button type="submit" className={style.register_btn}>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
