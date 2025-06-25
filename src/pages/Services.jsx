import React from "react";
import webImg from "../assets/web.png";
import digitalImg from "../assets/digital.png";
import Button from "../components/Button";

const services = [
  {
    title: "Web & Mobile App Development",
    description:
      "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
    image: (
      <img
        src={webImg}
        alt="Web & Mobile App Development"
        className="w-32 h-28 md:w-72 md:h-60 object-contain"
      />
    ),
  },
  {
    title: "Digital Strategy Consulting",
    description:
      "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
    image: (
      <img
        src={digitalImg}
        alt="Digital Strategy Consulting"
        className="w-32 h-28 md:w-72 md:h-60 object-contain"
      />
    ),
  },
];

const Services = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center py-8 md:py-12 px-2">
      <div className="max-w-5xl w-full space-y-6 md:space-y-32">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className={`flex flex-col md:flex-row items-center md:items-center justify-between gap-3 md:gap-8 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0 flex justify-center md:justify-center items-center w-full md:w-1/2 h-full">
              {service.image}
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start mt-1 md:mt-0">
              <h2 className="text-xl md:text-2xl font-bold text-[#4F46E5] mb-2 font-inter text-center md:text-left">
                {service.title}
              </h2>
              <p className="text-sm md:text-base text-[#000000] mb-4 text-center md:text-left">
                {service.description}
              </p>
              <Button text="LEARN MORE" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
