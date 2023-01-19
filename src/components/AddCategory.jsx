import { useState } from "react";

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('DBZ');
  const inputChange = ({target})=>{
    setInputValue(target.value) 
  }
  const onSubmit = e =>{
    e.preventDefault()
    setCategories(categories=>[inputValue,...categories])
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
