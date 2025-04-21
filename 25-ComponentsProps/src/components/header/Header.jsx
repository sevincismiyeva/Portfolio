import React from 'react'
import Navbar from '../navbar/Navbar'
import './Header.css'
import Mainheader from '../mainheader/Mainheader'

const Header = () => {
  return (
    <div className='head'>
        <Navbar/>
        <Mainheader/>
    </div>
  )
}

export default Header