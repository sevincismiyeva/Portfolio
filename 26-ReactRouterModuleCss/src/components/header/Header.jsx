import React from 'react'
import Navbar from '../navbar/Navbar'
import style from './Header.module.css'
import Mainheader from '../mainheader/Mainheader'

const Header = () => {
  return (
    <div className={style.header}>
     <Navbar/>   
     <Mainheader/>
    </div>
    
  )
}

export default Header