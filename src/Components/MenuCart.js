import React from 'react';
import { Link } from "react-router-dom";
import cartImg from "../Assets/cart.svg";

const MenuCart = ({ itemCount }) => {
  return (
    <div className="MenuCart">
      <Link to="/cart">
        <img src={cartImg} alt="" id="CartIcon" /> 
      </Link>
      <div id="shop-count">{itemCount} Items</div>
    </div>
  )
}

export default MenuCart;