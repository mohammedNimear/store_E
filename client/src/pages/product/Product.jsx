import React, { useState } from "react";
import "./product.scss";
import BalanceIcon from "@mui/icons-material/Balance";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantety, setQuantety] = useState(1);
  const images = [
    "https://images.unsplash.com/photo-1674092082722-6ce71c548da0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    "https://images.unsplash.com/photo-1679097568458-224715b96cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1679068372546-9f038067b5c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="imgs">
          <img src={images[0]} alt="img" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="img" onClick={(e) => setSelectedImg(1)} />
          <img src={images[2]} alt="img" onClick={(e) => setSelectedImg(2)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="main_img" />
        </div>
      </div>
      <div className="right">
        <h1>title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          maxime tenetur consequuntur pariatur minima, ipsam, commodi at rerum
          porro magnam error autem quibusdam qui cum?
        </p>
        <div className="quantety">
          <button
            onClick={() => setQuantety((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span>{quantety}</span>
          <button onClick={() => setQuantety((prev) => prev + 1)}>+</button>
        </div>

        <button className="add">
          <ShoppingCartOutlinedIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product type: T-shirt</span>
          <span>Tag: T-Sirt, Women, Top</span>
        </div>
        <hr />

        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
