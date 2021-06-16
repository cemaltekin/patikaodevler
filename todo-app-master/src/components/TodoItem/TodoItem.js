import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id, todoDelete } = props;
  const cizgi = (e) => {
    if (e.target.className !== "cizgi d-inline") {
      e.target.className = "cizgi d-inline";
    } else {
      e.target.className = "yoksanacizgi d-inline";
    }
  }
  return (
    <div className="todoItem d-flex justify-content-between align-items-center">
      <div onClick={cizgi}>{content}</div>
      <button className="btn btn-danger" value={id} onClick={todoDelete}>
        Delete
      </button>
    </div>
  );
}


export default Todo;