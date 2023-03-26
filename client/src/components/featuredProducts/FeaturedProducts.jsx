import React from "react";
import Card from "../card/Card";
import "./featuredProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {

  const { data, error, loading } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} product</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum
          animi ratione non quas ipsa. Soluta adipisci quaerat eum delectus
          dignissimos in veritatis reiciendis, et esse sapiente mollitia
          voluptate? Necessitatibus, o temporibus tenetur!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "something went wrong..."
          : loading
          ? "loading..."
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
