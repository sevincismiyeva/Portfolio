import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import './Footericon.css'




const Footericon = () => {
  return (
    <div className='footicon'>
        <span><FaTwitter /></span>
        <span><FaFacebookF /></span>
        <span><FaLinkedinIn /></span>
    </div>
  )
}

export default Footericon