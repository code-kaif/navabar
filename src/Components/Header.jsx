import React from "react";
import "../App.css";
import { FaAmazon } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="main">
        <div className="nav-1">
          <div className="amazone-logo">
            <FaAmazon />
          </div>
          <div className="delevery">
            <p>Delever to</p>
            <p className="india">
              {" "}
              <FaLocationDot /> India
            </p>
          </div>
          <div className="search">
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazone" />
            <button className="search-logo">
              <IoSearchSharp />
            </button>
          </div>
          <div className="sign">
            <p>Hello, sign in</p>
            <h5>Account & List</h5>
          </div>
          <div className="return">
            <p>Return</p>
            <p>& Order</p>
          </div>
          <div className="cart">
            <div className="cart-logo">
              <FaShoppingCart />
            </div>
            <h5>Cart</h5>
          </div>
        </div>
        <div className="nav-2">
          <div className="comps">
            <a href="" className="spl">
              {" "}
              <FaBars /> All
            </a>
            <a href="">Today's Deals</a>
            <a href="">Customer Service</a>
            <a href="">Registery</a>
            <a href="">Gifts Card</a>
            <a href="">Sell</a>
          </div>
          <h4>Shops deals in Electronics</h4>
        </div>
        <div className="hero-image">
          <img src="public/Images/hero_image.jpg" alt="" />
          <div className="main-text">
            <div className="amazone-text">
              <h5>
                Your are on amazone.com. You can also shop on Amazone India for
                millions of products with fast local delivery.{" "}
                <span>Click here to go amazone.in</span>{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
