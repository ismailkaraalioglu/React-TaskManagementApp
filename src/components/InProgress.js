import React from "react";
import { nanoid } from "nanoid";
import classNames from "classnames";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

function InProgress() {
  const inProgressTask = useSelector((state) => state.todoapp.inProgressTask);

  return (
    <Droppable droppableId="inProgressTask" key={nanoid()}>
      {(provided, snapshot) => (
        <div
          className={classNames({
            "bg-gray-100 shadow-lg w-80 rounded-xl p-5 text-sm font-medium text-gray-600 overflow-auto": true,
            "bg-blue-100": snapshot.isDraggingOver
          })}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h1 className="text-sm font-medium text-gray-600 border-b border-gray-600 pb-2 flex items-center justify-between pr-3">
            <span>IN PROGRESS</span>
            <span className="text-sm">{inProgressTask.length}</span>
          </h1>
          <div className="mt-3">
            {inProgressTask.map((todo, index) => (
              <TodoList key={index} todo={todo} index={index} />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default InProgress;
