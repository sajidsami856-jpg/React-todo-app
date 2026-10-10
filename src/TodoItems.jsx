import TodoItem from "./TodoItem";
function TodoItems({tasks,handleDeleteBtn}){
    return (
        <>
        {tasks.map((task,index)=>(
            <TodoItem key={index} handleDeleteBtn={handleDeleteBtn} todoDate={task.date} todoWork={task.item}></TodoItem>
        ))}
        </>
    );    
}
export default TodoItems;
