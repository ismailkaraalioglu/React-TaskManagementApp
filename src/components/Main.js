import Todos from "./Todos";
import InProgress from "./InProgress";
import InReview from "./InReview";
import Done from "./Done";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { todoDrag } from "../redux/todo/todoSlice";

function Main() {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    dispatch(todoDrag(result));
  };

  return (
    <main className="h-[520px] flex justify-center gap-x-9 w-11/12 mx-auto">
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
