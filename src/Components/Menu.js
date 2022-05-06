import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="MenuWrapper">
      <Link to="/home">
        <div className="MenuButton" id="home">Home</div>
      </Link>
      <Link to="/shop">
        <div className="MenuButton" id="shop">Shop</div>
      </Link>
    </nav>
  )
}

export default Menu;