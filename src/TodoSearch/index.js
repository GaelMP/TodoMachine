import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { SearchValue, setSearchValue } = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue (event.target.value)
  }

  return (
    <input 
    className="TodoSearch" 
    placeholder="🔍Busca tu tarea aquí🔎"
    onChange={onSearchValueChange}
    value={SearchValue}
    />
  );
}

export { TodoSearch };