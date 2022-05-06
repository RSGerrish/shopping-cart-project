import React from 'react';
import ProductCard from './ProductCard.js';

const ProductGrid = ({ items, onClick }) => {
  return items.map((card) => {
    return <ProductCard id={card.id} key={card.key} name={card.name} img={card.img} desc={card.desc} onClick={onClick} />
  })
}

export default ProductGrid;