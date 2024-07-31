import { createContext } from "react";

const TodoContext = createContext(null);
const TodoLocalContext = createContext(null);
const UpdatedTodoLocalContext = createContext(null);

export{
    TodoContext,
    TodoLocalContext,
    UpdatedTodoLocalContext,
};