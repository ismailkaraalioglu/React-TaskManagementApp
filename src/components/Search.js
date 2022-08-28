import React from "react";

function Search() {
  return (
    <div className="w-80">
      <input
        className="bg-gray-100 w-full outline-none pr-4 py-2 rounded placeholder:text-sm placeholder:font-medium placeholder:text-gray-400 placeholder:tracking-wide"
        placeholder="Search Todos"
      />
    </div>
  );
}

export default Search;
