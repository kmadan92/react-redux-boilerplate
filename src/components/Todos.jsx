import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../feature/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        {todos.map((each) => (
          <li className='text-amber-950' key={each.id}>
            {each.text}
            <button className='bg-amber-300 rounded-2xl m-5' onClick={() => dispatch(removeTodo(each.id))}>
              Delete
            </button>
          </li>
        ))}
      </div>
    </>
  );
}
