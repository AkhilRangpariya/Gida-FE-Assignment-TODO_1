import { useEffect, useState } from "react";
import {
  TodoContext,
  TodoLocalContext,
  UpdatedTodoLocalContext,
} from "./localStorage/TodoContext";
import BodyLayout from "./mainDesing/BodyLayout";
import HeaderLayout from "./mainDesing/HeaderLayout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [todoApiData, setTodoApiData] = useState(null);
  const [todoLocalStorage, setTodoLocalStorage] = useState(null);
  const [updatedTodoLocalStorage, setUpdatedTodoLocalStorage] = useState(null);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const getApiCall = async () => {
      try {
        await fetch(url)
          .then((response) => response.json())
          .then((repos) => {
            setTodoApiData(repos);
            toast.success("Todo get successfully!");
          })
          .catch((err) => {
            console.log("Error adding todo");
            toast.error("Failed to get todo. Please try again.");
          });
      }
      catch{
        console.log("Error adding todo");
            toast.error("Failed to get todo. Please try again.");
      }
    };

    getApiCall();
  }, []);

  useEffect(() => {
    if (todoApiData) {
      let sliceLocalData = todoApiData.slice(0, 20);
      setTodoLocalStorage(sliceLocalData);
      setUpdatedTodoLocalStorage(sliceLocalData);
    } else {
      console.log(console.log("local storage empty."));
    }
  }, [todoApiData]);

  return (
    <>
      <TodoContext.Provider value={todoApiData}>
        <TodoLocalContext.Provider
          value={[todoLocalStorage, setTodoLocalStorage]}
        >
          <UpdatedTodoLocalContext.Provider
            value={[updatedTodoLocalStorage, setUpdatedTodoLocalStorage]}
          >
            <div className="app_div bg-[#f6f6f6] w-full min-h-screen flex flex-col">
              <HeaderLayout />
              <BodyLayout />
            </div>
          </UpdatedTodoLocalContext.Provider>
        </TodoLocalContext.Provider>
      </TodoContext.Provider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
