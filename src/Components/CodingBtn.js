import React from "react";

const CodingBtn = () => {
  return (
    <a class="relative inline-flex items-center h-16 w-72 justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#49a99a] rounded-full shadow-md group">
      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#49a99a] group-hover:translate-x-0 ease">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span class="absolute flex items-center justify-center w-full h-full text-[#49a99a] transition-all duration-300 transform group-hover:translate-x-full ease">
        Lets Go To Our Courses !
      </span>
      <span class="relative invisible">Button Text</span>
    </a>
  );
};

export default CodingBtn;
