import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import TodoItems from "./TodoItems";
import { TodoItemsContext } from "./store/todo-items-store";
const TodoItem=({todoDate,todoWork})=>{
    const handelButtonSubmit=(evt)=>{
        console.log(evt);
        evt.preventDefault();
    }
    const {handleDeleteBtn} = useContext(TodoItemsContext);
    return (
    <>
    <form className="row kg-row" onSubmit={handelButtonSubmit}>
        <div className="col-6 text">{todoWork}</div>
        <div className="col-4 text-date">{todoDate}</div>
        <div className= "col-2 kg-btn">
            <button   className="btn btn-primary" onClick={()=>{handleDeleteBtn(todoWork)}}><MdDelete /></button>
        </div>
    </form>
    </>
    )
}
 
export default TodoItem;

