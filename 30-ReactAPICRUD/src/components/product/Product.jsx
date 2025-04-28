import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import style from './Product.module.css'

const Product = ({ product, deleteProd, editProd }) => {
  let { title, price } = product;
  return (
    <div className={style.productItem}>
      <div>
        {title} - {price}$
      </div>
      <div>
        <MdDelete onClick={deleteProd} className={style.iconDelete} size={25}/>
        <FaEdit onClick={editProd} className={style.iconEdit} size={25}/>
      </div>
    </div>
  );
};

export default Product;
