import React from 'react';

const ProductCard = ({ id, name, img, desc, onClick }) => {
  return (
    <div className="ProductCard" id={id}>
      <img src={img} alt="" />
      <div className="InfoContainer">
        <div className="ProductTitle">{name}</div>
        <div className="ProductDescription">{desc}</div>
      </div>
      <div className="ControlContainer">
        <div className="QtyLabel">
          Qty: <input name="productQty" type="number" className="ProductQty" defaultValue="0" />
        </div>
        <button className="BtnAdd" onClick={onClick}>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard;