import React, { useState } from "react";
import "./ListItem.scss";
import { FiCheckSquare } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { BsTrash } from "react-icons/bs";

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
          <FiCheckSquare className="check" onClick={toggleCompleted} />
        ) : (
          <MdCheckBoxOutlineBlank className="close" onClick={toggleCompleted} />
        )}
        <BsTrash onClick={handlerDelete} className='delete'/>
      </span>
      <p>{title}</p>
    </div>
  );
};

export default LsitItem;
