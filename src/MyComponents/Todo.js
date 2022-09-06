import React from "react";
import { IndividualTodo } from "./IndividualTodo";

export const Todo = (props) => {
  let myStyle = {
    margin: "40px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-4">Todo list</h3>
      {props.todos.length == 0
        ? "No todo item to display"
        : props.todos.map((todo) => {
            return (
              <IndividualTodo
                todo={todo}
                key={todo.sno}
                onDelete={props.onDelete}
              />
            );
          })}
    </div>
  );
};
