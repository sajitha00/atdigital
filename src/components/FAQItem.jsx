import React from "react";

const FAQItem = ({ faq, idx, openIdx, onToggle }) => {
  const isOpen = openIdx === idx;

  return (
    // Outer wrapper with background color and border
    <div
      className={`rounded-lg ${
        isOpen ? "bg-[#F6F4FF]" : "bg-white"
      } shadow-sm border border-transparent`}
    >
      <button
        className={`w-full flex justify-between items-center text-left px-5 py-4 focus:outline-none ${
          isOpen ? "text-[#4F46E5] font-semibold" : "text-black font-medium"
        }`}
        onClick={() => onToggle(idx)}
      >
        <span className="text-base sm:text-lg">{faq.question}</span>
        <span className="text-2xl font-bold ml-4 select-none">
          {isOpen ? "–" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-4 text-gray-500 text-sm sm:text-base animate-fade-in">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
