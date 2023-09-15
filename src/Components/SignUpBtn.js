import React from "react";

const SignUpBtn = ({ children }) => {
  return (
    <a
      href="#_"
      class="px-8 py-2.5 relative rounded group overflow-hidden font-medium bg-[#bbedd0] text-white inline-block"
    >
      <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#49a99a] group-hover:h-full opacity-90"></span>
      <span class="relative group-hover:text-white">{children}</span>
    </a>
  );
};

export default SignUpBtn;
