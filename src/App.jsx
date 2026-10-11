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
    ])
  }
  const handleDeleteBtn=(todoItemName)=>{
    const newTasks= currTask.filter(things => things.item !== todoItemName );
    setText(newTasks);

  }
  const defaultTodoItems=[{
    item:"go to college",
    date:"6/9/2007",
  }]
  return <center className="todo-placeholder">
      <TodoItemsContext.Provider value={defaultTodoItems}>
        <div className="container text-center">
          <AppName/>
          <AddTodo handleOnChange={handleOnChange}/>
          <ErrorMsg currTask={currTask}></ErrorMsg>
          <TodoItems tasks={currTask} handleDeleteBtn={handleDeleteBtn}></TodoItems>
        </div>
      </TodoItemsContext.Provider>
    </center>
}
export default App;
// inputDate={inputDate} inputData={inputData}