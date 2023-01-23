import { useState } from "react";

export const AddCategory = ({onAddCategories}) => {
  const [inputValue, setInputValue] = useState('');
  const inputChange = ({target})=>{
    setInputValue(target.value) 
  }
  const onSubmit = e =>{
    e.preventDefault()
    if(inputValue.trim().length >= 1) return
    onAddCategories(categories=>[inputValue,...categories])
    setInputValue('')
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
