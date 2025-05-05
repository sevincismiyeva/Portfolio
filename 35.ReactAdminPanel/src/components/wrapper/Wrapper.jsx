import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from '../../utils/Dropdown';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = () => {
  const {wishlist}=useSelector((state)=>state.wishlist);
  const{products}=useSelector((state)=>state.basket);

  let basketCount=products.reduce((acc,item)=>acc+item.count,0)
  return (
    <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
        <Link to={'/wishlist'}><FavoriteBorderIcon style={{cursor:'pointer',color:'red'}}/>
        <sup style={{fontSize:'14px'}}>{wishlist.length}</sup></Link>
        <Link to={'/basket'}><ShoppingCartIcon/>
        <sup style={{fontSize:'14px'}}>{basketCount}</sup></Link>
        <Dropdown/>
    </div>
  )
}

export default Wrapper