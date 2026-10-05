import AppName from "./appNAme";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
// import AddTodo2 from "./AddTodo2";
import "./App.css"
function App() {
  const dailyThings=[
    {
      item:"Buy Milk",
      date:"4/6/7880",
    },
    {
      item:"Go to College",
      date:"5/45/4949",
    },
    {
      item:"get up early",
      date:"56/40/4949",
    }
  ];
  return <center className="todo-placeholder">
      <div className="container text-center">
        <AppName/>
        <AddTodo/>
        <TodoItems tasks={dailyThings}></TodoItems>
      </div>
    </center>
}
export default App;