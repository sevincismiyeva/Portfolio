import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { updateWishlist } from "../redux/features/wishlistSlice";
import { allDelete } from "../redux/features/wishlistSlice";
import { toast } from "react-toastify";

const Wishlist = () => {
  let { wishlist } = useSelector((state) => state.wishlist);
  let dispatch = useDispatch();
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {wishlist &&
            wishlist.map((item) => (
              <tr style={{ verticalAlign: "middle", textAlign: "center" }}>
                <td>
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: "150px",
                      height: "200px",
                      borderRadius: "5px",
                    }}
                  />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch(updateWishlist(item));
                      toast.success("Product removed");
                    }}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Button
          onClick={() => {
            if (wishlist.length === 0) {
              toast.warning("Wishlist is already empty");
            } else {
              dispatch(allDelete());
              toast.success("All products removed from wishlist");
            }
          }}
        >
          All Delete
        </Button>
      </div>
    </div>
  );
};

export default Wishlist;
