import React from 'react';
import './TodoCounter.css';
import { totalTodos } from '../App/App';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext)

  return (
    <h2 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Tareas
      </h2>
  );
}

export { TodoCounter };