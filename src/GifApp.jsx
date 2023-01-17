import { useState } from "react";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball", "Digimon"]);
  const addCategory = () => {
    setCategories([...categories, 'Valorant'])
  };
  return (
    <>
      <h1>Gif App</h1>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      <button onClick={addCategory}>Agregar</button>
    </>
  );
};
