import React, {useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plants, setPlants] = useState([]);
const [search, onSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((response) => response.json())
    .then((plantData) => setPlants(plantData))
  },[]);

  const displayPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  })
  return (
    <main>
      <NewPlantForm />
      <Search search={search} onSearch={onSearch}/>
      <PlantList plants={displayPlants}/>
    </main>
  );
}

export default PlantPage;
