import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filteredTodoTask } from "../redux/todo/todoSlice";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputValue === "") {
      return;
    }
    dispatch(filteredTodoTask(inputValue));
  }, [inputValue, dispatch]);

  return (
    <div className="w-80">
      <input
        className="bg-gray-100 w-full outline-none pr-4 py-2 rounded placeholder:text-sm placeholder:font-medium placeholder:text-gray-400 placeholder:tracking-wide"
        placeholder="Search Todos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default Search;
