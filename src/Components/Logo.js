import React from 'react';
import imgLogo from '../Assets/Lapstock.svg';

const Logo = () => {
  return (
    <div className="MenuLogo">
      <img src={imgLogo} alt="" id="LogoImage" /> LapStock's Makeup
    </div>
  )
}

export default Logo;