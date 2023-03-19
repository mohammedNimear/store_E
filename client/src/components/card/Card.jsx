import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product${item.id}`} className="link">
      <div className="card">
        <div className="imgs">
            {item.isNew && <span>New Season</span>}
            <img src={item.img} alt="" className="img_1" />
            <img src={item.img_2} alt="" className="img_2" />
        </div>
        <h2>{item.title}</h2>
        <div className="price">
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>

        </div>
      </div>
    </Link>
  );
};

export default Card;
