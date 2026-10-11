import { MdDelete } from "react-icons/md";
const TodoItem=({todoDate,todoWork,handleDeleteBtn})=>{
    const handelButtonSubmit=(evt)=>{
        console.log(evt);
        evt.preventDefault();
    }

    return (
    <>
    <form className="row kg-row" onSubmit={handelButtonSubmit}>
        <div className="col-6 text">{todoWork}</div>
        <div className="col-4 text-date">{todoDate}</div>
        <div className= "col-2 kg-btn">
            <button   className="btn btn-primary" onClick={()=>handleDeleteBtn(todoWork)}><MdDelete /></button>
        </div>
    </form>
    </>
    )
}
 
export default TodoItem;

