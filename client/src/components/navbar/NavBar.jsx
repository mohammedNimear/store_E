import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import PersonOutline from "@mui/icons-material/PersonOutline";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import "./navbar.scss"
import Cart from './../cart/Cart';
import { useSelector } from "react-redux";

const NavBar = () => {

  const [open, setOpen] = useState(false);
  const products = useSelector(state=>state.cart.products)


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src="/images/SD-Sudan-Flag-icon.png"
              alt="flag"
              style={{ width: "25px" }}
            />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">NUMEAR STORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutline />
            <FavoriteBorder />
            <div className="cartIcon" onClick={()=> setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default NavBar;
