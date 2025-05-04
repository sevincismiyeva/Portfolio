import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import style from './Basket.module.css'
import { allBasketDelete, decrement, increment, removeBasket } from '../../redux/features/basketSlice';
import { toast } from "react-toastify";

const Basket = () => {
  let{products}=useSelector(state=>state.basket);
  const dispatch=useDispatch();

  let totalPrice=products.reduce((acc,product)=>acc+product.count*product.price,0);

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Count</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => (
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
                  <div className={style.count_area} >
                    <button className={style.minus_btn} onClick={()=>dispatch(decrement(item.id))} disabled={item.count === 1}>-</button>
                    <p className={style.count}>{item.count}</p>
                    <button className={style.plus_btn} onClick={()=>dispatch(increment(item.id))}>+</button>
                  </div>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch(removeBasket(item.id));
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

      <div style={{ textAlign: "center", marginTop: "30px",display:'flex',justifyContent:'space-between' }}>
        <Button
          onClick={() => {
            if (products.length === 0) {
              toast.warning("Basket is already empty");
            } else {
              dispatch(allBasketDelete());
              toast.success("All products removed from basket");
            }
          }}
        >
          All Delete
        </Button>
        <h3>Total:{totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Basket