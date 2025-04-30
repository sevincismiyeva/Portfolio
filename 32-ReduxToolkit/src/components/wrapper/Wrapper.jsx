import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from '../../utils/Dropdown';

const Wrapper = () => {
  return (
    <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
        <FavoriteBorderIcon/>
        <ShoppingCartIcon/>
        <Dropdown/>
    </div>
  )
}

export default Wrapper