import React from "react";
import { nanoid } from "nanoid";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

function Todos() {
  const todos = useSelector((state) => state.todoapp.todos);
  const searchInputValue = useSelector(
    (state) => state.todoapp.searchInputValue
  );

  const filteredTodoTask = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchInputValue)
  );

  return (
    <Droppable droppableId="todos" key={nanoid()}>
      {(provided, snapshot) => (
        <div
          className="bg-gray-100 w-80 rounded p-5"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h1 className="text-sm font-medium text-gray-600">
            <span>TO DO</span>
            <span className="ml-3 text-xs">{todos.length}</span>
          </h1>
          <div className="mt-2">
            {filteredTodoTask.map((todo, index) => (
              <TodoList key={index} todo={todo} index={index} />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Todos;
