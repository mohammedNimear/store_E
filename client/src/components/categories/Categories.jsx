import React from "react";
import { Link } from "react-router-dom";
import "./categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
            <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=400" alt="img" />
            <button><Link className="link" to="/products/1">Sale</Link></button>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/6626999/pexels-photo-6626999.jpeg?auto=compress&cs=tinysrgb&w=400" alt="img" />
            <button><Link className="link" to="/products/2">Men</Link></button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/1882309/pexels-photo-1882309.jpeg?auto=compress&cs=tinysrgb&w=400" alt="img" />
            <button><Link className="link" to="/products/1">New Season</Link></button>
        </div>
      </div>
      <div className="col col_l">
        <div className="row">
          <div className="col">
            <div className="row"><img src="https://images.pexels.com/photos/573298/pexels-photo-573298.jpeg?auto=compress&cs=tinysrgb&w=400" alt="img" />
            <button><Link className="link" to="/products/1">Accessories</Link></button></div>
          </div>
          <div className="col">
            <div className="row"><img src="https://images.pexels.com/photos/1619730/pexels-photo-1619730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
            <button><Link className="link" to="/products/2">Kids Fashion</Link></button></div>
          </div>
        </div>
        <div className="row"><img src="https://images.pexels.com/photos/573243/pexels-photo-573243.jpeg?auto=compress&cs=tinysrgb&w=400" alt="img" />
            <button><Link className="link" to="/products/1">Toys</Link></button></div>
      </div>
    </div>
  );
};

export default Categories;
