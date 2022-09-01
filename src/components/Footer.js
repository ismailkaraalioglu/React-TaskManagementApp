import React from "react";

function Footer() {
  return (
    <div className="text-lg text-gray-600 font-semibold h-[56px] mt-5 flex items-center justify-center gap-x-3">
      <p>
        Created by{" "}
        <span className="hover:text-blue-700">
          <a href="https://github.com/ismailkaraalioglu">İsmail Karaalioğlu</a>
        </span>
      </p>
    </div>
  );
}

export default Footer;
