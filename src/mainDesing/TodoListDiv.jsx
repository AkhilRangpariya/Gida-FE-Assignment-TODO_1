import React, { useContext, useEffect, useState } from "react";
import { UpdatedTodoLocalContext } from "../localStorage/TodoContext";
import Todo from "../components/Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import AddTodo from "../components/AddTodo";

function TodoListDiv() {
  const [updatedLocalStorage, setUpdatedLocalStorage] = useContext(
    UpdatedTodoLocalContext
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // add new todo
  const handleAddTodo = () => {
    setIsPopupOpen(true);
  };

  const handleSaveTodo = () => {
    if (newTodoTitle.trim()) {
      const newTodo = {
        id: Date.now(),
        title: newTodoTitle,
        completed: false,
      };
      try {
        const response = (async () => {
          await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
          });
        })();

        if (!response.ok) {
          throw new Error("Failed to add todo");
        }

        setUpdatedLocalStorage([...updatedLocalStorage, newTodo]);
        setNewTodoTitle("");
        setIsPopupOpen(false);
        toast.success("Todo added successfully!");
      } catch (error) {
        console.log("Error adding todo:");
        toast.error("Failed to add todo. Please try again.");
      }
      setUpdatedLocalStorage([...updatedLocalStorage, newTodo]);
      setNewTodoTitle("");
      setIsPopupOpen(false);
    }
  };
  const handleCancelTodo = () => {
    setNewTodoTitle("");
    setIsPopupOpen(false);
  };

  // todo completed
  const handleCompleteTodo = (id) => {
    setUpdatedLocalStorage(
      updatedLocalStorage?.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    toast.info("Todo status updated");
  };
  // todo delte
  const handleDeleteTodo = (id) => {
    setUpdatedLocalStorage(
      updatedLocalStorage
        ? updatedLocalStorage?.filter((todo) => todo.id !== id)
        : updatedLocalStorage
    );
    toast.success("Todo deleted successfully");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const completedTodosCount = updatedLocalStorage
    ? updatedLocalStorage.filter((todo) => todo.completed).length
    : 0;
  const totalTodosCount = updatedLocalStorage ? updatedLocalStorage.length : 0;

  return (
    <>
      <div className="todolist_outerdiv px-2">
        {updatedLocalStorage?.map((todoElement) => (
          <Todo
            key={todoElement.id}
            id={todoElement.id}
            title={todoElement.title}
            completed={todoElement.completed}
            onComplete={handleCompleteTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </div>

      {!isMobile && (
        <>
          <div className="my-[1vw] border-b-2 border-gray-300 md:my-[1.5vw]"></div>
          <div className="mt-[1vw] flex justify-between md:mt-[2vw]">
            <div className="completed_todo text-[#6a6a6a] text-xl">
              <FontAwesomeIcon icon={faEye} /> Completed {completedTodosCount}{" "}
              out of {totalTodosCount}
            </div>
            <button className="add_new_todo text-xl" onClick={handleAddTodo}>
              <FontAwesomeIcon icon={faPlus} /> Add Todo
            </button>
          </div>
        </>
      )}

      {isMobile && (
        <button
          className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 shadow-lg"
          onClick={handleAddTodo}
        >
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </button>
      )}

      {isPopupOpen && (
        <AddTodo
          newTodoTitle={newTodoTitle}
          onNewTodoTitle={setNewTodoTitle}
          onCancelTodo={handleCancelTodo}
          onSaveTodo={handleSaveTodo}
        />
      )}
    </>
  );
}

export default TodoListDiv;
