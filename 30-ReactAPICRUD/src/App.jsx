import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Products from "./components/products/Products";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const baseUrl = "https://fakestoreapi.com/products";

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [edit, setEdit] = useState(false);
  const [selectId, setSelectId] = useState(null);

  const getProducts = async () => {
    try {
      let res = await axios.get(baseUrl);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addandupdateProduct = () => {
    if (!newTitle || !newPrice) {
      toast.error("Düzgün doldurun");
      return;
    }

    if (edit) {
      const updatedProducts = product.map((prod) =>
        prod.id === selectId
          ? { ...prod, title: newTitle, price: newPrice }
          : prod
      );
      setProduct(updatedProducts);
      toast.success("Product updated successfully!");
      setEdit(false);
      setSelectId(null);
    } else {
      const newProduct = {
        id: Date.now(),
        title: newTitle,
        price: newPrice,
      };
      setProduct([...product, newProduct]);
      toast.success("Product added successfully!");
    }

    setNewTitle("");
    setNewPrice("");
  };

  const deleteProduct = (id) => {
    const findIndex = product.findIndex((cat) => cat.id === id);
    product.splice(findIndex, 1);
    setProduct([...product]);
    toast.info("Product deleted successfully!");
  };

  const editProduct = (product) => {
    setNewTitle(product.title);
    setNewPrice(product.price);
    setEdit(true);
    setSelectId(product.id);
  };

  const resetProduct = () => {
    setProduct([]);
    toast.warning("All products reset!");
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ToastContainer />
      <h2>Products</h2>
      {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <div className="container">
          <div className="inputArea">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Title"
              className="input"
            />
            <br />
            <input
              type="number"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              placeholder="Price"
              className="input"
            />
            <br />
            <button
              onClick={addandupdateProduct}
              className="button"
            >
              {edit ? "Update" : "Add "}
            </button>
            <button onClick={resetProduct} className="button resetbutton">Reset All</button>
            <Products
              product={product}
              onDelete={deleteProduct}
              onEdit={editProduct}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
