import React, { useState, useEffect } from "react";

function PlantCard(plant) {
  const {id, name, image, price} = plant;
  const [inStock, setInStock] = useState(true);

  const handleStock = () =>{
    setInStock(inStock => !inStock);
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {!!inStock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>) : (<button onClick={handleStock}>Out of Stock</button>)}
    </li>
  );
}

export default PlantCard;
