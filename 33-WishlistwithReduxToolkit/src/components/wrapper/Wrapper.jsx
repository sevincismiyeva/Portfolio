import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from '../../utils/Dropdown';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = () => {
  const {wishlist}=useSelector((state)=>state.wishlist);
  return (
    <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
        <Link to={'/wishlist'}><FavoriteBorderIcon style={{cursor:'pointer',color:'red'}}/>
        <sup style={{fontSize:'14px'}}>{wishlist.length}</sup></Link>
        <Link to={'/basket'}><ShoppingCartIcon/></Link>
        <Dropdown/>
    </div>
  )
}

export default Wrapper