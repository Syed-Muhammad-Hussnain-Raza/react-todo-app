import { useState, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);

  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef(); // New Added
  const dueDateElement = useRef(); // New Added

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value; // New Added
    const dueDate = dueDateElement.current.value; // New Added
    todoNameElement.current.value = ""; // New Added
    dueDateElement.current.value = ""; // New Added
    addNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement} // New Added
            placeholder="Enter Todo here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement} // New Added
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
