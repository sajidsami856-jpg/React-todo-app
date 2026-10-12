import AppName from "./appNAme";
import AddTodo from "./AddTodo";
import ErrorMsg from "./ErrorMsg";
import TodoItems from "./TodoItems";
import { useContext } from "react";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
import "./App.css"
function App() {
  const[currTask,setText]=useState([]);
  const handleOnChange=(currTodo,currDate)=>{
    setText((oldValue)=>[
      ...oldValue,{
        item:currTodo,
        date:currDate,
      }
    ]);
  }
  const handleDeleteBtn=(todoItemName)=>{
    const newTasks= currTask.filter(things => things.item !== todoItemName );
    setText(newTasks);
  }
  return <center className="todo-placeholder">
      <TodoItemsContext.Provider value={{
        todoItems:currTask,
        handleOnChange,
        handleDeleteBtn,
        }}>
        <div className="container text-center">
          <AppName/>
          <AddTodo />
          <ErrorMsg ></ErrorMsg>
          <TodoItems ></TodoItems>
        </div>
      </TodoItemsContext.Provider>
    </center>
}
export default App;