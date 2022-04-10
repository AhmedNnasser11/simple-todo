import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import LsitItem from '../ListItem/LsitItem'
import "./List.scss"
const List = () => {
  const [todos, setTodo] = useState([])
  const [inputText, setInputText] = useState("")
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_page=7&_limit=20').then((response) => {
      setTodo(response.data);
    });
  }, [])


  return (
    <div>
        <header>
            To do List
        </header>
        <Form setInputText={setInputText} inputText={inputText} setTodo={setTodo} todos={todos}/>
        <section>
          {todos.map((item) => (
              <LsitItem todo={item} key={item.id} todos={todos} setTodo={setTodo}/>
          ))}
        </section>
    </div>
  )
}

export default List