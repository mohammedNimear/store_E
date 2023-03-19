import React, { useState } from "react";
import "./slider.scss";
import WestOutlined from "@mui/icons-material/WestOutlined";
import East from "@mui/icons-material/East";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/969363/pexels-photo-969363.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/393043/pexels-photo-393043.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];


  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 5 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 5 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="img" />
        <img src={data[1]} alt="img" />
        <img src={data[2]} alt="img" />
        <img src={data[3]} alt="img" />
        <img src={data[4]} alt="img" />
        <img src={data[5]} alt="img" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <East />
        </div>
      </div>
    </div>
  );
};

export default Slider;
