import React from "react";
import Todos from "./Todos";

function Main() {
  return (
    <main className="h-screen flex justify-center gap-x-9">
      <Todos />
      <div className="bg-gray-100 w-80 rounded p-5 text-sm font-medium text-gray-600">
        IN PROGRESS
      </div>
      <div className="bg-gray-100 w-80 rounded p-5 text-sm font-medium text-gray-600">
        IN REVİEW
      </div>
      <div className="bg-gray-100 w-80 rounded p-5 text-sm font-medium text-gray-600">
        DONE
      </div>
    </main>
  );
}

export default Main;
