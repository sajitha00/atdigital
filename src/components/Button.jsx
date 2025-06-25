import React from "react";

const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#F28D35] hover:bg-[#e67e28] text-white font-semibold font-inter px-5 py-2 transition-colors duration-200 text-xs sm:text-sm uppercase tracking-wide shadow-md ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
