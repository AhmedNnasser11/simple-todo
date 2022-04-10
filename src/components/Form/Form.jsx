import React, { useEffect, useRef } from "react";
import './Form.scss'

const Form = ({ setInputText, todos, setTodo, inputText }) => {

  const ref = useRef()

  useEffect(() => {
    ref.current.focus()
  }, [])

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todos,
      { title: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <form>
      <input ref={ref} value={inputText} type="text" onChange={inputTextHandler} className='addInput'/>
      <button type="submit" onClick={submitTodoHandler} className='addButton'>
        ADD
      </button>
    </form>
  );
};

export default Form;
