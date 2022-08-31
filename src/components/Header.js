import { AiOutlineEdit } from "react-icons/ai";

function Header() {
  return (
    <header className="h-16 w-full bg-blue-600 flex items-center justify-center">
      <h1 className="font-semibold text-xl text-gray-100 flex items-center justify-center gap-x-2">
        <span>Task Management App</span>
        <span className="cursor-text">
          <AiOutlineEdit size={23} />
        </span>
      </h1>
    </header>
  );
}

export default Header;
