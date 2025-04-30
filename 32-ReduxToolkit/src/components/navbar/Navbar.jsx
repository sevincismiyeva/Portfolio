import React, { useState } from 'react'
import Logo from '../logo/Logo'
import Navlist from '../navlist/Navlist'
import Wrapper from '../wrapper/Wrapper'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {


  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}} className='container'>
        <Logo/>
        <Navlist/>
        <Wrapper/>
    </div>
  )
}

export default Navbar