import React from "react";
import { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title or Description cannot be blank.");
    }
    props.addTodo(title, description);
  };
  return (
    <div className="container my-3">
      <h3>Add your todo items here:</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo name
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>{" "}
        {/* Here, due to the use of value tag, the default value of the form element remains constant. Hence, we have 
                        to make use of a different method for capturing the user input. */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Todo description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="description"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};
