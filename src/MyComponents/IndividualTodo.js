import React from 'react'

export const IndividualTodo = ({todo, onDelete}) => {
  return (
    <div>
      <h4 key={todo.sno}>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>  {/* Here, we cannot use the normal version of function calling
      which is func() because this will get rendered during the execution of code itself. Hence, in order to only pass the function (i.e. func not func()) 
      we will make use of an arrow function */}
    </div>
  )
}
