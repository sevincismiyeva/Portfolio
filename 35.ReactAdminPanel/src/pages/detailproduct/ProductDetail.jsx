import React, { useEffect } from "react";
import style from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setDetailProduct,
  incrementDetailCount,
  decrementDetailCount,
} from "../../redux/features/detailSlice";
import { addBasket } from "../../redux/features/basketSlice";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { allproducts } = useSelector((state) => state.products);
  const { product, count } = useSelector((state) => state.detail);

  useEffect(() => {
    const selected = allproducts.find((p) => p.id == id);
    if (selected) {
      dispatch(setDetailProduct(selected));
    }
  }, [id, allproducts, dispatch]);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container">
      <div className="row">
        <div className={style.productContainer}>
          <div className={style.productImage}>
            <img src={product.image} alt="Product" />
          </div>

          <div className={style.productDetails}>
            <h4 className={style.productTitle}>{product.title}</h4>
            <p className={style.productCategory}>
              Category: {product.category}
            </p>
            <p className={style.productPrice}>${product.price}</p>
            <p className={style.productDescription}>{product.description}</p>

            <div className={style.productRating}>
              <span>⭐{product.rating?.rate}</span>
              <span>({product.rating?.count} reviews)</span>
            </div>

            <div className={style.quantitySelector}>
              <button
                onClick={() => dispatch(decrementDetailCount())}
                disabled={count <= 1}
              >
                -
              </button>
              <input type="number" value={count} readOnly />
              <button onClick={() => dispatch(incrementDetailCount())}>
                +
              </button>
            </div>

            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(addBasket({ ...product, count }));
                toast.success('Product add Basket')
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
