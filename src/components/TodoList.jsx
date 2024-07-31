import React, { useContext } from "react";
import { TodoContext } from "../localStorage/TodoContext";

function TodoList() {
  const { TodoLocalContext } = useContext(TodoContext);
  return <div>TodoLocalContext.map(function (ele) { TodoLocalContext})</div>;
}

export default TodoList;
