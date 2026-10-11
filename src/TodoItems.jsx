import { TodoItemsContext } from "./store/todo-items-store";
// import { useContext } from "react";
import { useContext } from "react";
import TodoItem from "./TodoItem";
function TodoItems({tasks,handleDeleteBtn}){
    const TodoItemsFormC= useContext(TodoItemsContext);
    console.log(`context item ${TodoItemsFormC}`);
    return (
        <>
        {tasks.map((task,index)=>(
            <TodoItem key={index} handleDeleteBtn={handleDeleteBtn} todoDate={task.date} todoWork={task.item}></TodoItem>
        ))}
        </>
    );    
}
export default TodoItems;
