import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  
 const plantList = plants.map((plant) =>{
  return (<PlantCard key={plant.id} name = {plant.name} image = {plant.image} 
  price = {plant.price}/>);
})

  return (
    <ul className="cards">
      {plantList}
    </ul>
  );
}

export default PlantList;
