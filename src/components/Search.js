import React, {useState, useEffect} from "react";

function Search({defaultPlants, setPlantList}) {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(text)

    if (text !== "") {
      const newPlants = defaultPlants.filter(plant => plant.name.toLowerCase().startsWith(text));
      console.log(newPlants)
      setPlantList(newPlants);
    } else {
      setPlantList(defaultPlants);
    }
  }, [text])

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={text}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default Search;
