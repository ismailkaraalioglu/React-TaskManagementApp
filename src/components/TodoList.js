import React from "react";
import classNames from "classnames";
import Swal from "sweetalert2";
import {
  AiOutlineCloseCircle,
  AiFillClockCircle,
  AiOutlineEdit,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  removeTodoTask,
  completedTodoTask,
  editingTodoTask,
} from "../redux/todo/todoSlice";

function TodoList({ todo }) {
  const dispatch = useDispatch();

  const editingTodoTaskModal = async (task) => {
    const { value } = await Swal.fire({
      input: "textarea",
      inputLabel: "Editing Todo Task",
      inputPlaceholder: "Type your message here...",
      inputValue: task.text,
      showCancelButton: true,
    });
    if (value) {
      dispatch(editingTodoTask({ value, task }));
    }
  };

  const removeTask = (id) => {
    dispatch(removeTodoTask(id));
  };

  const completedTask = (task) => {
    dispatch(completedTodoTask(task));
  };

  return (
    <div
      className={classNames({
        "rounded mb-1.5": true,
        "bg-white text-gray-600": !todo.completed,
        "bg-green-200 text-green-800": todo.completed,
      })}
    >
      <div className="text-xs font-medium flex items-start justify-between gap-x-3 px-3 py-5">
        <p className="flex-1">{todo.text}</p>
        <div className="flex items-center gap-x-1">
          <button onClick={() => editingTodoTaskModal(todo)}>
            <AiOutlineEdit size={20} />
          </button>
          <button onClick={() => removeTask(todo.id)}>
            <AiOutlineCloseCircle size={20} />
          </button>
        </div>
      </div>

      <div
        className={classNames({
          "border-t p-3 flex items-center gap-x-1": true,
          "border-green-700": todo.completed,
        })}
      >
        <AiFillClockCircle size={16} />
        <span className="text-xs">{todo.time}</span>
        <button
          className={classNames({
            "text-xs font-medium ml-auto py-1 px-2 rounded": true,
            "bg-gray-200 hover:bg-gray-300": !todo.completed,
            "bg-green-200 text-green-800 hover:bg-green-300": todo.completed,
          })}
          onClick={() => completedTask(todo)}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;
