import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Category</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum facilis maxime odio numquam quam, culpa earum animi repellat vel iure officia nam omnis sed aliquid eos id aliquam ea vitae, exercitationem laudantium quos quis.</span>
        </div>
        <div className="item">
        <h1>Links</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum facilis maxime odio numquam quam, culpa earum animi repellat vel iure officia nam omnis sed aliquid eos id aliquam ea vitae, exercitationem laudantium quos quis.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Numear_Store </span>
          <span className="copyright">Copyright 2023 All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
