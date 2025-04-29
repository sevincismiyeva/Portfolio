import React, { useContext } from "react";
import { ProductsContext } from "../context/Products";
import ProductCard from "../components/product/ProductCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { products, loading, error } = useContext(ProductsContext);

  if (loading) {
    return <p>Yüklənir...</p>;
  }

  if (error) {
    return <p>Xəta: {error.message}</p>;
  }

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
