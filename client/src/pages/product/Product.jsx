import React, { useState } from "react";
import "./product.scss";
import BalanceIcon from "@mui/icons-material/Balance";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { dot } from "../../dotenv";
import { useDispatch } from "react-redux";
import { addToCart } from './../../Redux/cartReducer';

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

  const { data, loaoding, error } = useFetch(`/products/${id}?populate=*`);
  return (
    <div className="product">
      {error ? (
        "someThing went worng!"
      ) : loaoding ? (
        "loading..."
      ) : (
        <>
          <div className="left">
            <div className="imgs">
              <img
                src={
                  dot.REACT_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt="img"
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  dot.REACT_UPLOAD_URL +
                  data?.attributes?.img_2?.data?.attributes?.url
                }
                alt="img"
                onClick={(e) => setSelectedImg("img_2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  dot.REACT_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt="main_img"
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              maxime tenetur consequuntur pariatur minima, ipsam, commodi at
              rerum porro magnam error autem quibusdam qui cum?
            </p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add" onClick={()=>dispatch(addToCart({
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: data.attributes.price,
              img: data.attributes.img.data.attributes.url,

               quantity,
            }))}>
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
              <span>Vendor: {data?.attributes?.title}</span>
              <span>Product type: {data?.attributes?.type}</span>
              <span>Tag: T-Sirt, Women, Top</span>
            </div>
            <hr />

            <div className="info">
              <span>{data?.attributes?.desc}</span>
              <hr />
              <span>ADITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
