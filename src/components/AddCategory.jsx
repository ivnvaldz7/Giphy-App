import { useState } from "react";

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");
  const inputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const addOnSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewValue(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={addOnSubmit}>
        <input
          type="text"
          placeholder="Buscar en Giphy!!"
          value={inputValue}
          onChange={inputChange}
        />
      </form>
    </>
  );
};
