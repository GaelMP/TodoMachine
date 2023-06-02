import React from "react";
import { TodoContext } from '../TodoContext/index';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
// import { Title } from '../Title';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import './AppUI.css';


function AppUI() {
  
    const {
      error, 
      loading, 
      searchedTodos, 
      completeTodos, 
      deleteTodos,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>

        {/* <Title/>   */}

        <TodoCounter/>
        
        <TodoSearch/>
      
            <TodoList>

            

        {error && <h1>😨desesperate uvo un error😨</h1>}
        {loading && <h1>estamos cargando no te desesperes =D</h1>}
        {(!loading && !searchedTodos.length) && <h1>➕crea tu primera Tarea➕</h1>}


              {searchedTodos.map(todo =>(

              <TodoItem
               key={todo.text}
               text={todo.text}
               completed={todo.completed}
               onComplete={() => completeTodos(todo.text)}
               onDelete={() => deleteTodos(todo.text)}
              />
              ))}
            </TodoList>

              {openModal && (
                <Modal>
                 <TodoForm/>
                </Modal>
              )}
  
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />
  
      </React.Fragment>
    );
}

export {AppUI}

