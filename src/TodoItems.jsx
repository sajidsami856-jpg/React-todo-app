import { TodoItemsContext } from "./store/todo-items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";
function TodoItems(){
    const contextObje= useContext(TodoItemsContext);
    const todoItems =  contextObje.todoItems;
    return (
        <>
        {todoItems.map((todoItems,index)=>(
            <TodoItem key={index}  todoDate={todoItems.date} todoWork={todoItems.item}></TodoItem>
        ))}
        </>
    );    
}
export default TodoItems;
