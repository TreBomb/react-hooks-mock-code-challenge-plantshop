import React, {useState} from "react";

function NewPlantForm({ plantList, setPlantList }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  function updatePlants(e) {
    e.preventDefault();
    console.log(formData);
    setPlantList([...plantList, formData]);

    fetch(`http://localhost:6001/plants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      })
    }

  function updateForm(e) {
    const key = e.target.name;
    const val = e.target.value;
    setFormData({...formData, [key]: val})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={e=> updatePlants(e)}>
        <input onChange={e => updateForm(e)} value={formData.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={e => updateForm(e)} value={formData.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={e => updateForm(e)} value={formData.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
