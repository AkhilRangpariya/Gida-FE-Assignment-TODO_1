import React from "react";

function AddTodo({ newTodoTitle, onNewTodoTitle, onCancelTodo, onSaveTodo }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded-lg w-5/6 max-w-md">
          <label for="add_todo">Add your new todo text</label>
          <input
            id="add_todo"
            type="text"
            value={newTodoTitle}
            onChange={(e) => onNewTodoTitle(e.target.value)}
            placeholder="Enter new todo"
            className="border p-2 mb-2 w-full"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={onCancelTodo}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={onSaveTodo}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
