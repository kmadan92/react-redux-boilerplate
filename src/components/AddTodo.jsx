import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice.js";

export default function AddTodo() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const add = () => {
    if (!todo) return;

    dispatch(addTodo({
        text:todo
    }));
    setTodo("");
  };

  return (
    <form
      className="flex"
      onSubmit={(e) => {
        e.preventDefault();
        add();
      }}
    >
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}
