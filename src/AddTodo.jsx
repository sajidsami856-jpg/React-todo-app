import { useState,useRef, useContext } from "react";
import { RiAddLargeFill } from "react-icons/ri";
import { TodoItemsContext } from "./store/todo-items-store";
function AddTodo(){
    const dataRef=useRef();
    const dateRef = useRef();
    const {handleOnChange}=useContext(TodoItemsContext);
    const btnAction=(evt)=>{
        console.log(dataRef.current.value);
        if(dataRef || dateRef){
            evt.preventDefault();
            const finalData =dataRef.current.value ;        
            const finalDate = dateRef.current.value;
            handleOnChange(finalData,finalDate);
            dataRef.current.value="";
            dateRef.current.value="";
            console.log(finalData,finalDate);  
                     
        }
    }
    return (
            <form className="row kg-row" onSubmit={btnAction}>
                <div className="col-6">
                    <input placeholder="Enter todo here" type="text" ref={dataRef}  />
                </div>
                <div className="col-4">
                    <input type="date" ref={dateRef}  />
                </div>
                <div className="col-2">
                    <button  className="btn btn-success kg-button"  onClick={btnAction}><RiAddLargeFill/></button>
                </div>
            </form>
        )
}
export default AddTodo;