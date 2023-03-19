import React from "react";
import "./list.scss";
import Card from "./../card/Card";

export const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/160590/girls-beauty-makeup-dark-160590.jpeg?auto=compress&cs=tinysrgb&w=400",
      img_2:
        "https://images.pexels.com/photos/160599/beauty-leather-style-girl-160599.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "hair subject",
      oldPrice: 19,
      price: 10,
      isNew: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg?auto=compress&cs=tinysrgb&w=400",
      img_2:
        "https://images.pexels.com/photos/219550/pexels-photo-219550.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "pro accesories",
      oldPrice: 19,
      price: 10,
      isNew: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400",
      img_2:
        "https://images.pexels.com/photos/3062949/pexels-photo-3062949.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "modern t-shirt",
      oldPrice: 15,
      price: 32,
      isNew: false,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/896299/pexels-photo-896299.jpeg?auto=compress&cs=tinysrgb&w=400",
      img_2:
        "https://images.pexels.com/photos/2852270/pexels-photo-2852270.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "fashion",
      oldPrice: 99,
      price: 110,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
