import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./Admin.css";
import { Link, useNavigate } from "react-router-dom";
import TransitionsModal from "../../utils/modal/Modal";
import { useState } from "react";
import {
  addProducts,
  deleteProducts,
  updateProducts,
} from "../../redux/features/productSlice";

const Admin = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    price: "",
    category: "",
    description: "",
  });

  let { allproducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProducts(formData));
    toast.success("New product added");
    handleClose(); 
    setFormData({
      image: "",
      title: "",
      price: "",
      category: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteProducts(id));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateProducts(formData));
    toast.success("The Product Edited");
    handleClose();
    setFormData({
      image: "",
      title: "",
      price: "",
      category: "",
      description: "",
    });
  };

  return (
    <div
      className="container"
      style={{ boxShadow: "0 8px 18px rgba(0, 0, 0, 0.15)" }}
    >
      <h2 style={{ paddingTop: "10px" }}>Admin Panel</h2>
      <Button
        variant="success"
        style={{ marginBottom: "15px" }}
        onClick={handleOpen}
      >
        Create
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {allproducts &&
            allproducts.map((item) => (
              <tr
                style={{ verticalAlign: "middle", textAlign: "center" }}
                key={item.id}
              >
                <td>
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: "160px",
                      height: "180px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/productdetail/${item.id}`)}
                  />
                </td>
                <td>{item.title.slice(0, 25)}</td>
                <td>${item.price}</td>
                <td>{item.category}</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDelete(item.id);
                        toast.success("Product removed");
                      }}
                    >
                      Remove
                    </Button>
                    <Button
                      variant="warning"
                      type="submit"
                      onClick={()=>{
                        handleOpen();
                        setFormData(item);
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <TransitionsModal
        open={open}
        handleClose={handleClose}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={formData.id ? handleEdit :handleAddProduct}
      />
      <div style={{ fontSize: "18px" }}>
        <Link to={"/"}>Back</Link>
      </div>
    </div>
  );
};

export default Admin;
