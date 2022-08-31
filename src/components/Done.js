import React from "react";
import { nanoid } from "nanoid";
import classNames from "classnames";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

function Done() {
  const doneTask = useSelector((state) => state.todoapp.doneTask);

  return (
    <Droppable droppableId="doneTask" key={nanoid()}>
      {(provided, snapshot) => (
        <div
          className={classNames({
            "bg-gray-100 shadow-lg w-80 rounded-xl p-5 text-sm font-medium text-gray-600 overflow-auto": true,
            "bg-green-100": snapshot.isDraggingOver,
          })}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h1 className="text-sm font-medium text-gray-600 border-b border-gray-600 pb-2 flex items-center justify-between pr-3">
            <span>DONE</span>
            <span className="text-sm">{doneTask.length}</span>
          </h1>
          <div className="mt-3">
            {doneTask.map((todo, index) => (
              <TodoList key={index} todo={todo} index={index} />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Done;
