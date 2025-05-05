import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateWishlist } from "../../redux/features/wishlistSlice";
import { toast } from "react-toastify";
import { addBasket } from "../../redux/features/basketSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findProduct = wishlist.find((item) => item.id == product.id);

  return (
    <div
      className="col-sm-12 col-lg-3"
      onClick={() => navigate(`/productdetail/${product.id}`)}
    >
      <Card style={{ position: "relative" }}>
        {findProduct ? (
          <FaHeart
            onClick={(e) => {
              e.stopPropagation();
              dispatch(updateWishlist(product));
              toast.warning("Product remove wishlist");
            }}
            size={21}
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              cursor: "pointer",
              color: "red",
            }}
          />
        ) : (
          <CiHeart
            onClick={(e) => {
              e.stopPropagation();
              dispatch(updateWishlist(product));
              toast.success("Product add wishlist");
            }}
            size={24}
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              cursor: "pointer",
            }}
          />
        )}
        <Card.Img
          variant="top"
          src={product.image}
          style={{
            width: "18rem",
            height: "18rem",
            padding: "10px",
            cursor: "pointer",
          }}
        />
        <Card.Body>
          <Card.Title>{product.title.slice(0, 20)}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button
            variant="primary"
            style={{
              width: "100%",
              padding: "8px",
              background: "linear-gradient(135deg, #6c63ff, #4a90e2)",
              color: " white",
              fontWeight: "700",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addBasket(product));
              toast.success("Product add Basket");
            }}
          >
            Add Basket
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
