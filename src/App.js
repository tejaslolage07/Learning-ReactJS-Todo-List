import './index.css';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todo } from './MyComponents/Todo';
import { IndividualTodo } from './MyComponents/IndividualTodo';

function App() {

  const onDelete = (todo)=>{
    console.log("I am onDelete of todo", todo)
  }

  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You have to go to the market to buy stuff.",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You have to go to the market to buy some more stuff.",
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You have to go to the market to buy jadibuti.",
    }
  ]
  return (
    <>
      <Header title="Todo List" about={true} />
      <Todo todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
