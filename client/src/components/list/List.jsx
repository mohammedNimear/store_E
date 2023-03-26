import React from "react";
import "./list.scss";
import Card from "./../card/Card";
import useFetch from "../../hooks/useFetch";

export const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loaoding, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}`
  );
  console.log(subCats)

 
  return (
    <div className="list">
      {error
        ? "something went worng"
        : loaoding
        ? "loading..."
        : data?.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
    </div>
  );
};

export default List;
