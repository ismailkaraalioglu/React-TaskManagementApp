import Todos from "./Todos";
import InProgress from "./InProgress";
import InReview from "./InReview";
import Done from "./Done";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { todoDrag } from "../redux/todo/todoSlice";

function Main() {
  const todos = useSelector((state) => state.todoapp.todos);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newItems = [...todos];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    dispatch(todoDrag(newItems));
  };

  return (
    <main className="h-screen flex justify-center gap-x-9">
      <DragDropContext onDragEnd={onDragEnd}>
        <Todos />
        <InProgress />
        <InReview />
        <Done />
      </DragDropContext>
    </main>
  );
}

export default Main;
