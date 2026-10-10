import { useState } from "react";

function AddTodo({handleOnChange}){
    const [currTask,setTask]=useState("");
    const [currDate,setDate]=useState("");
    const inputData=(evt)=>{
        setTask(evt.target.value);
        // evt.target.value="";ss
    }
    const inputDate=(evt)=>{
        setDate(evt.target.value);
    }
    const btnAction=()=>{
        if(currTask || currDate){
            handleOnChange(currTask,currDate);
            setDate("");
            setTask("");
        }
        
    }
    return (
            <div className="row kg-row">
                <div className="col-6">
                    <input placeholder="Enter todo here" type="text"  onChange={inputData} value={currTask} />
                </div>
                <div className="col-4">
                    <input type="date"  onChange={inputDate} value={currDate} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success kg-button" onClick={btnAction}>Add</button>
                </div>
            </div>
        )
}
export default AddTodo;