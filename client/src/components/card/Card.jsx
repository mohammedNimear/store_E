import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import { dot } from "../../dotenv";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="imgs">
            {item?.attributes?.isNew && <span>New Season</span>}
            <img src={dot.REACT_UPLOAD_URL + item?.attributes?.img.data.attributes?.url} alt="" className="img_1" />
            <img src={dot.REACT_UPLOAD_URL + item?.attributes?.img_2.data.attributes?.url} alt="" className="img_2" />
        </div>
        <h2>{item.title}</h2>
        <div className="price">
            <h3>${item?.attributes?.oldPrice || item?.attributes?.price + 25 }</h3>
            <h3>${item?.attributes?.price}</h3>

        </div>
      </div>
    </Link>
  );
};

export default Card;