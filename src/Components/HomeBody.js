import React from 'react';
import BigSale from '../Assets/big-sale.png';

const HomeBody = () => {
  return (
    <div className="HomeBody">
      <div className="HomeMessage">
        Did Somebody Say Sale?
      </div>
      <div className="HomeSale">
        <img src={BigSale} alt="" />
      </div>
    </div>
  )
}

export default HomeBody;