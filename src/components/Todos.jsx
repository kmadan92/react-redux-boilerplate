import { useSelector, useDispatch } from "react-redux";
import { saveTodo, removeTodo, setEditable } from "../feature/todoSlice";
import { useState } from "react";

export default function Todos() {
 
    const [todo, setTodo] = useState("")
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        {todos.map((each) => (
          <li className='text-amber-950' key={each.id} >
            <input type='text' 
            readOnly={!each.editable}
            value={each.text}
            onChange={(e)=>dispatch(saveTodo({id:each.id, text:e.target.value}))}
            className={each.editable?'border-2':'border-0'}
            />
            <button 
            className={each.editable?'bg-amber-900 rounded-2xl m-5':'bg-amber-300 rounded-2xl m-5'} 
            onClick={()=>{
            if(each.editable)
            {
                dispatch(setEditable(each.id))
            }
            else{
                dispatch(setEditable(each.id))
                console.log(each)
            }
            }
            }>
                {each.editable? "Save":"Update"}</button>
              
          </li>
        ))}
      </div>
    </>
  );
}
