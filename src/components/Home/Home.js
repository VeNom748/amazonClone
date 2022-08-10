import React from "react";
import "../Home/Home.css";
import { Category_box } from "./Category_box";
import { Product_row_first } from "../Product/Product_row_first";
import { Product_row_second } from "../Product/Product_row_second";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <div className="Home" id="Home">
      <div className="Home_container">
        <Category_box />
        <div className="category_box" id="main">
          <Product_row_first />
        </div>
        <div className="category_box">
          <Product_row_second />
        </div>
      </div>
      <Footer Home={true} />
    </div>
  );
};
