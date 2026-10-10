import AppName from "./appNAme";
import AddTodo from "./AddTodo";
import ErrorMsg from "./ErrorMsg";
import TodoItems from "./TodoItems";
import { useState } from "react";
// import AddTodo2 from "./AddTodo2";
import "./App.css"
function App() {
  const dailyThings=[
  ];
  const[currTask,setText]=useState(dailyThings);
  const handleOnChange=(currTodo,currDate)=>{
      const newTodo={
        item:currTodo,
        date:currDate,
      }
      setText([...currTask,newTodo]);
  }
  const handleDeleteBtn=(todoItemName)=>{
    const newTasks= currTask.filter(things => things.item !== todoItemName );
    setText(newTasks);

  }

  return <center className="todo-placeholder">
      <div className="container text-center">
        <AppName/>
        <AddTodo handleOnChange={handleOnChange}/>
        {currTask.length === 0 &&  <ErrorMsg></ErrorMsg>}
        <TodoItems tasks={currTask} handleDeleteBtn={handleDeleteBtn}></TodoItems>
      </div>
    </center>
}
export default App;
// inputDate={inputDate} inputData={inputData}