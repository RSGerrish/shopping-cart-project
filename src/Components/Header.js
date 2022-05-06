import React from 'react';
import Menu from './Menu.js';
import MenuCart from './MenuCart.js';
import Logo from './Logo.js';

const Header = ({ itemCount }) => {
  return (
    <header>
      <div className="HeaderPosition">
        <Logo />
        <Menu />
        <MenuCart itemCount={itemCount} />
      </div>
    </header>
  )
}

export default Header;