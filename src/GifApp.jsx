import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState(['Fortnite']);
  const onAddCategory = (newValue) => {
    if(categories.includes(newValue)) return
    setCategories([...categories, newValue]);
  };
  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onNewValue={onAddCategory} />
      <ol>
        {categories.map((category) => {
          return <li key={category}> {category}</li>;
        })}
      </ol>
    </>
  );
};
