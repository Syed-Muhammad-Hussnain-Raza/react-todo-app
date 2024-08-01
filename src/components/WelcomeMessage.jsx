import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";

const WelcomeMessage = () => {
   const {todoItems} = useContext(TodoItemsContext);

   return (
       todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
   );
}

export default WelcomeMessage;