import './index.css';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todo } from './MyComponents/Todo';
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState } from 'react';  // This is the method used to delete values in a list in ReactJS.

function App() {

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // In React, deleting this way does not work
    // let index = todos.indexOf(todo);  // This is the way the items are deleted from 
    // todos.splice(index, 1);           // runtime variable memory in other frameworks than React.

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }

  const addTodo = (title, description) => {
    console.log("I am adding this todo", title, description);
    let sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: description
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }

  const [todos, setTodos] = useState([

    {
      sno: 1,
      title: "Go to the market",
      desc: "You have to go to the market to buy stuff.",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You have to go to the mall to buy some more stuff.",
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You have to go to the ghat to buy jadibuti.",
    }
  ]);

  return (
    <>
      <Header title="Todo List" about={true} />
      <AddTodo addTodo={addTodo} />
      <Todo todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
