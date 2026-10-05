
const TodoItem=(props)=>{
    return <div className="row kg-row">
        <div className="col-6 text">{props.todoWork}</div>
        <div className="col-4 text-date">{props.todoDate}</div>
        
        <div className= "col-2 kg-btn">
            <button type="button" class="btn btn-primary">Primary</button>
        </div>
    </div>
}

export default TodoItem;



