import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newValue) => {
    if(categories.includes(newValue)) return
    setCategories([newValue, ...categories]);
  };
  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onNewValue={onAddCategory} />
      {categories.map(category=>(
          <GifGrid key={category} category={category}/>
        )
      )}
    </>
  );
};
