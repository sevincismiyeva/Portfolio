import React from "react";
import Product from "../product/Product";
import style from './Products.module.css'

const Products = ({product,onDelete,onEdit}) => {
  return (
    <div className={style.productList}>
      <ul>
        {product && product.map((cat) => 
        <Product key={cat.id } product={cat} deleteProd={()=>onDelete(cat.id)} editProd={()=>onEdit(cat)}/>
        )}
      </ul>
    </div>
  );
};

export default Products;
