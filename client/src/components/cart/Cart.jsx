import React from "react";
import "./cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from 'react-redux';
import { resetCart, removeItem } from "../../Redux/cartReducer";
import { dot } from "../../dotenv";

const Cart = () => {
 
  const products = useSelector(state=>state.cart.products)
  const dispatch =useDispatch()

  const totalPrice = () => {
    let total = 0;
    products.forEach(item =>total += item.price*item.quantity)
    return total.toFixed(2)
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={dot.REACT_UPLOAD_URL+item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className="price">{item.quantity} x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" onClick={()=>dispatch(removeItem(item))} />
        </div>
      ))}

      <div className="total">
        <span>TOTAL</span>
        <span>${totalPrice()}</span>
      </div>

      <button>PROCEED TO CHECKOUT</button>

      <span className="reset" onClick={()=>dispatch(resetCart())}>Reset cart</span>
    </div>
  );
};

export default Cart;
