import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from './Components/Header.js';

function App() {
  const [itemCount, setItemCount] = useState(0);

  const setCartQty = (qty) => {
    const newQty = parseInt(qty);

    setItemCount((prevCount) => prevCount + newQty)
  }

  return (
    <div className="App">
      <Header itemCount={itemCount} />
      <Outlet context={setCartQty} />
    </div>
  );
}

export default App;
