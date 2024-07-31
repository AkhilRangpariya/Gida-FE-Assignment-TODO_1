import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ id, title, completed, onComplete, onDelete }) {
  return (
    <div className="flex items-center justify-between text-xl align-middle mb-2 md:mb-[1vw]">
      <div className="flex items-center">
        <lable for='complte_todo'></lable>
        <div id='complte_todo' className="mim-w-[7vw]">
        <input
          id="complte_todo"
          type="checkbox"
          checked={completed}
          onChange={() => onComplete(id)}
          className="w-6 h-5 mr-2"
        />
        </div>
        <span id="complte_todo"
          value={title}
          onClick={() => onComplete(id)}
          className={`p-1 text-justify ${completed === true ? "line-through" : ""} `}
        > 
        {title}
        </span>
      
      </div>
      <button onClick={() => onDelete(id)} className=" hidden ml-5 md:block text-red-400 hover:text-red-600">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default TodoItem;
