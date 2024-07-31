import React from "react";
import PopupComponent from "./PopupComponent";
import TodoListDiv from "./TodoListDiv";

function BodyLayout() {
  return (
    <div className="bodylayout_outerdiv p-6 w-full h-full  md:px-[10vw] md:w-full ">
      <div className="block w-full mb-8">
        <h1 className="text-5xl font-medium mb-2">Hello,</h1>
        <p className="text-xl text-[#6a6a6a] mb-2">
          Get started by creating your first checklist.
        </p>
      </div>
      <div className="todobody_outerdiv w-full flex flex-col gap-6 md:flex md:flex-row ">
        <div className="todobody_innerdiv w-full overflow-auto bg-white py-[4vw] px-[4vw] rounded-lg md:py-[2vw]">
          <div className="todobody_headingdiv">
            <h1 className="text-3xl font-medium align-middle ">
              Todo List
            </h1>
            <div className="my-[2vw] border-b-2 border-gray-300 md:my-[1.5vw] "></div>
          </div>
          <div>
            <TodoListDiv />
          </div>
          
        </div>
        <div className="todolist_signup_container hidden w-3/5 max-w-64 h-fit overflow-auto bg-white pt-4 pr-2 pb-4 pl-2 rounded-lg md:block">
          <PopupComponent />
        </div>
      </div>
    </div>
  );
}

export default BodyLayout;
