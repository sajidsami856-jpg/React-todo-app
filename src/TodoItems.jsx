import TodoItem from "./TodoItem";
function TodoItems({tasks}){
    return (
        <>
        {tasks.map((task,index)=>(
            <TodoItem key={index} todoDate={task.date} todoWork={task.item}></TodoItem>
        ))}
        </>
    );    
}
export default TodoItems;
