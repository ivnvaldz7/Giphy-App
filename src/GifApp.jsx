import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball", "Digimon"]);
  const addCategory = () => {
    setCategories([...categories, 'Valorant'])
  };
  return (
    <>
      <h1>Gif App</h1>
      <AddCategory setCategories= {setCategories}/>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
