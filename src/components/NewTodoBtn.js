import React from "react";
import Swal from "sweetalert2";
import { BsPlus } from "react-icons/bs";

function NewTodoBtn() {
  const newTodoItemModal = async () => {
    const { value } = await Swal.fire({
      input: "textarea",
      inputLabel: "New Todo",
      inputPlaceholder: "Type your message here...",
      showCancelButton: true,
    });
    if (value) {
      console.log(value);
    }
  };

  return (
    <div className="text-gray-500 border border-gray-400 rounded">
      <button
        className="flex items-center justify-center gap-x-2 px-5 py-2"
        onClick={newTodoItemModal}
      >
        <BsPlus size={22} />
        New Todo
      </button>
    </div>
  );
}

export default NewTodoBtn;
