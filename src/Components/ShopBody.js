import React, { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import ProductGrid from './ProductGrid.js';
import ImgItem1 from '../Assets/cologne.jpg';
import ImgItem2 from '../Assets/lippystick.jpg';
import ImgItem3 from '../Assets/milkwash.jpg';
import ImgItem4 from '../Assets/venus-kit.jpg';

const ShopBody = ({ onUpdateQty }) => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const setCartQty = useOutletContext();

  useEffect(() => {
    const loadItems = () => {
      setItems([
        {
          name: 'Cologne',
          img: ImgItem1,
          desc: 'Statistics show that 100% of the time it works 60% of the tiiiime',
          key: 1,
          id: 1,
        },
        {
          name: 'Lippy Stick',
          img: ImgItem2,
          desc: 'Stick it to your lips!',
          key: 2,
          id: 2,
        },
        {
          name: 'Milk Wash',
          img: ImgItem3,
          desc: 'For the most vibrant skin',
          key: 3,
          id: 3,
        },
        {
          name: 'Venus Kit',
          img: ImgItem4,
          desc: 'No idea what this is...',
          key: 4,
          id: 4,
        }
      ])
    };

    loadItems();
  }, [])

  const onAddToCart = (e) => {
    const card = e.currentTarget.parentNode.parentNode
    const image = card.querySelector('img').src
    const name = card.querySelector('.ProductTitle').innerText;
    const desc= card.querySelector('.ProductDescription').innerText;
    const qty = card.querySelector('input').value;
    const cardID = card.id;

    const itemToAdd = { 
      name: name, 
      image: image, 
      desc: desc,
      qty: qty,
      id: cardID
    };

    setCart((prevState) => [...prevState, itemToAdd]);
    setCartQty(qty);
  };


  return (
    <div className="ProductGrid">
      <ProductGrid items={items} onClick={onAddToCart} />
    </div>
  );
}

export default ShopBody;