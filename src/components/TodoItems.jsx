import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
