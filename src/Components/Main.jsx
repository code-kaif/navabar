import React from "react";
import "../App.css";
import data from "./data";

const Main = () => {
  return (
    <>
      <div className="products">
        {data.map((prod) => {
          return (
            <div className="product">
              <div className="product-heading">
                <h2>{prod.title}</h2>
              </div>
              <div className="product-image">
                <img src={prod.image} alt="" />
              </div>
              <div className="product-button">
                <h2>Shop</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
