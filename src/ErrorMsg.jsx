import styles from "./ErrorMsg.module.css";
import { TodoItemsContext } from "./store/todo-items-store";
import { useContext } from "react";
const ErrorMsg =()=>{
    const contextObj=useContext(TodoItemsContext);
    const todoItems=contextObj.todoItems;
    return (todoItems.length === 0 && <h2 className={styles.welcome}>Make your todo list</h2>);
}
export default ErrorMsg;