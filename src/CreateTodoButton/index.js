import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  }

  return (
    <div className='foot'>
      {/* <h2 className='crear'>CREA UNA TAREA 👉</h2> */}
      <button
       className="CreateTodoButton"
       onClick={onClickButton}
       >
       +
      </button>
    </div>
  );
}

export { CreateTodoButton };