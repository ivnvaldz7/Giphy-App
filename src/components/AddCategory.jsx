import { useState } from "react";

export const AddCategory = ({onAddCategories}) => {
  console.log(AddCategory);
  const [inputValue, setInputValue] = useState('');
  const inputChange = ({target})=>{
    setInputValue(target.value) 
  }
  const onSubmit = e =>{
    e.preventDefault()
    onAddCategories(categories=>[inputValue,...categories])
    console.log(inputValue);
  } 
    
  return (
    <>
      <form onSubmit={onSubmit}> 
        <input 
            type="text" 
            placeholder="Buscar Giphy" 
            value={inputValue} 
            onChange={inputChange}
        />
      </form>
    </>
  );
};
