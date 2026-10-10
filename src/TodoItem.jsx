
const TodoItem=({todoDate,todoWork,handleDeleteBtn})=>{
    return <div className="row kg-row">
        <div className="col-6 text">{todoWork}</div>
        <div className="col-4 text-date">{todoDate}</div>
        
        <div className= "col-2 kg-btn">
            <button type="button" className="btn btn-primary" onClick={()=>handleDeleteBtn(todoWork)}>Delete</button>
        </div>
    </div>
}
 
export default TodoItem;

