import React, { useState } from "react";
import FAQItem from "../components/FAQItem";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.",
  },
];

const Freq = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="w-full flex flex-col items-center py-10 px-2 bg-white">
      <h2 className="text-xl sm:text-2xl font-bold text-[#4F46E5] text-center mb-8">
        Frequently asked questions
      </h2>
      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem
            key={faq.question}
            faq={faq}
            idx={idx}
            openIdx={openIdx}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Freq;
