import React from "react";
import { BsSearch } from "react-icons/bs";
import NewTodoBtn from "./NewTodoBtn";
import Search from "./Search";

function HeaderBottom() {
  return (
    <div className="flex items-center justify-between w-11/12 mx-auto py-6">
      <div className="bg-gray-100 flex items-center rounded-md gap-x-3 border border-gray-400">
        <div className="pl-4 text-gray-500">
          <BsSearch size={18} />
        </div>
        <Search />
      </div>
      <NewTodoBtn />
    </div>
  );
}

export default HeaderBottom;
