import React from "react";
import classNames from "classnames";
import Swal from "sweetalert2";
import {
  AiOutlineCloseCircle,
  AiFillClockCircle,
  AiOutlineEdit,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodoTask,
  completedTodoTask,
  editingTodoTask,
} from "../redux/todo/todoSlice";
import { Draggable } from "react-beautiful-dnd";

function TodoList({ todo, index }) {
  const getColumsId = useSelector((state) => state.todoapp.getColumsId);
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
      dispatch(editingTodoTask({ value, task, getColumsId }));
    }
  };

  const removeTask = (id) => {
    dispatch(removeTodoTask({ id, getColumsId }));
  };

  const completedTask = (task) => {
    dispatch(completedTodoTask({ task, getColumsId }));
  };

  return (
    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className="rounded mb-1.5 text-gray-600 drop-shadow-lg bg-white"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="text-xs font-medium flex items-start justify-between gap-x-3 px-3 py-5">
            <p
              className={classNames({
                "flex-1": true,
                "line-through": todo.completed,
              })}
            >
              {todo.text}
            </p>
            <div className="flex items-center gap-x-1">
              <button onClick={() => editingTodoTaskModal(todo)}>
                <AiOutlineEdit size={20} />
              </button>
              <button onClick={() => removeTask(todo.id)}>
                <AiOutlineCloseCircle size={20} />
              </button>
            </div>
          </div>

          <div className="border-t p-3 flex items-center gap-x-1">
            <AiFillClockCircle size={16} />
            <span className="text-xs">{todo.time}</span>
            <button
              className={classNames({
                "text-xs font-medium ml-auto py-1 px-2 rounded": true,
                "bg-gray-200 hover:bg-gray-300": !todo.completed,
                "bg-green-200 text-green-800 hover:bg-green-300":
                  todo.completed,
              })}
              onClick={() => completedTask(todo)}
            >
              Completed
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default TodoList;
