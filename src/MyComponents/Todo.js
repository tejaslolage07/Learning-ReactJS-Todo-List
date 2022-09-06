import React from 'react'
import { IndividualTodo } from './IndividualTodo'

export const Todo = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-4' >Todo list</h3>
      {props.todos.map((todo)=>{
        return (
        <IndividualTodo todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
      })}
      
    </div>
  )
}
