import React from 'react'
import Footerlogo from '../footerlogo/Footerlogo'
import Footericon from '../footericon/Footericon'
import Footertext from '../footertext/Footertext'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer container'>
        <Footerlogo/>
        <Footericon/>
        <Footertext/>
    </div>
  )
}

export default Footer