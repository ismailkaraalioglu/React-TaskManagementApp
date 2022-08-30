import React from "react";
import { nanoid } from "nanoid";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

function InReview() {
  const inReviewTask = useSelector((state) => state.todoapp.inProgressTask);

  return (
    <Droppable droppableId="inReviewTask" key={nanoid()}>
      {(provided, snapshot) => (
        <div
          className="bg-gray-100 w-80 rounded p-5 text-sm font-medium text-gray-600"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h1 className="text-sm font-medium text-gray-600">
            <span>IN REVIEW</span>
          </h1>
          <div className="mt-2">
            {inReviewTask.map((todo, index) => (
              <TodoList key={index} todo={todo} index={index} />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default InReview;
