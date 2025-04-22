import React from 'react'
import { IoIosMail } from "react-icons/io";
import style from './Form.module.css'


const Form = () => {
  return (
    <div className={style.formmain}>
        <div className={style.formtop}>
            <div className={style.icon}><IoIosMail /></div>
              <h2 className={style.title}>Get in touch</h2>
              <p className={style.desc}>We'd love to hear from you</p>
        </div>
        <form className={style.form}>
        <input type="text" placeholder="Full name" required />
        <input type="email" placeholder="Email address" required />
        <input type="tel" placeholder="Phone number" required/>
        <textarea placeholder="Message" rows="5" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form