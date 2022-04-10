import React, { useState } from "react";
import "./ListItem.scss";
import { FaCheck, FaTrashAlt, FaRegTimesCircle } from "react-icons/fa";
const LsitItem = (props) => {
  const { title, completed, id } = props.todo;
  const [isCompleted, setIsCompleted] = useState(completed)
  const {todos, setTodo} = props;
  const toggleCompleted = () => {
    console.log('clicked')
    setIsCompleted(!isCompleted)
  };

  const handlerDelete = () => {
    setTodo(todos.filter(el => el.id !== props.todo.id))
  }

  return (
    <div className={`item ${isCompleted && "completed"}`}>
      <span className="icons">
        {isCompleted ? (
          <FaCheck className="check" onClick={toggleCompleted} />
        ) : (
          <FaRegTimesCircle className="close" onClick={toggleCompleted} />
        )}
        <FaTrashAlt onClick={handlerDelete} className='delete'/>
      </span>
      <p>{title}</p>
    </div>
  );
};

export default LsitItem;
