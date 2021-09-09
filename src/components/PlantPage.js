import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([]);
  const [defaultPlants, setDefaultPlants] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:6001/plants`)
    .then(r=>r.json())
    .then(data=>{
      setPlantList(data);
      setDefaultPlants(data);
    })
  }, [])
  return (
    <main>
      <NewPlantForm plantList={plantList} setPlantList={setPlantList}/>
      <Search defaultPlants={defaultPlants} setPlantList={setPlantList}/>
      <PlantList plantList={plantList}/>
    </main>
  );
}

export default PlantPage;
