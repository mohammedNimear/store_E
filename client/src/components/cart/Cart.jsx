import React from "react";
import "./cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
      img_2:
        "https://images.pexels.com/photos/3062949/pexels-photo-3062949.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "modern t-shirt",
      desc: "pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
      oldPrice: 15,
      price: 32,
      isNew: false,
    },
    {
      id: 2,
      img:"https://images.pexels.com/photos/2852270/pexels-photo-2852270.jpeg?auto=compress&cs=tinysrgb&w=400",
      img_2: "https://images.pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "fashion",
      desc: "pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
      oldPrice: 99,
      price: 110,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
        img_2:
          "https://images.pexels.com/photos/3062949/pexels-photo-3062949.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "modern t-shirt",
        desc: "pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
        oldPrice: 15,
        price: 32,
        isNew: false,
      },
      {
        id: 4,
        img:"https://images.pexels.com/photos/2852270/pexels-photo-2852270.jpeg?auto=compress&cs=tinysrgb&w=400",
        img_2: "https://images.pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "fashion",
        desc: "pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
        oldPrice: 99,
        price: 110,
      },
      {
        id: 5,
        img: "https://images.pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
        img_2:
          "https://images.pexels.com/photos/3062949/pexels-photo-3062949.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "modern t-shirt",
        desc: "pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
        oldPrice: 15,
        price: 32,
        isNew: false,
      },
      {
        id: 6,
        img:"https://images.pexels.com/photos/2852270/pexels-photo-2852270.jpeg?auto=compress&cs=tinysrgb&w=400",
        img_2: "https://images.pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "fashion",
        desc: "pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
        oldPrice: 99,
        price: 110,
      },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 20)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>

      <button>PROCEED TO CHECKOUT</button>

      <span className="reset">Reset cart</span>
    </div>
  );
};

export default Cart;
