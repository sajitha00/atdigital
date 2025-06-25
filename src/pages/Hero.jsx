import React from "react";
import bgImage from "../assets/bgimage.png";
import Button from "../components/Button";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Background Image  */}
      <div className="hidden lg:block absolute inset-0 w-full h-full">
        <img
          src={bgImage}
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10" />
      </div>

      {/* Content - Desktop */}
      <div className="hidden lg:flex relative z-10 w-full h-screen items-center">
        <div className="flex flex-col justify-center items-start w-[680px] ml-24 bg-gradient-to-br from-[#4DCA79] to-[#1CBDDD] shadow-2xl px-12 py-8">
          <h1 className="text-white font-bold font-inter mb-6 leading-tight">
            <span className="block text-4xl xl:text-5xl mb-2">
              We Crush Your
            </span>
            <span className="block text-4xl xl:text-5xl mb-2">
              Competitors, Goals, And
            </span>
            <span className="block text-4xl xl:text-5xl mb-2">
              Sales Records - Without
            </span>
            <span className="block text-4xl xl:text-5xl">The B.S.</span>
          </h1>
          <Button
            text="GET FREE CONSULTATION"
            className="mt-3 px-8 py-3 text-sm"
          />
        </div>
      </div>

      {/* Content - Mobile */}
      <div className="flex flex-col lg:hidden w-full">
        {/* Image Top */}
        <div className="w-full h-40 sm:h-48 md:h-56">
          <img
            src={bgImage}
            alt="Hero Background"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Card Below */}
        <div className="w-full bg-gradient-to-br from-[#4DCA79] to-[#1CBDDD] px-4 py-6">
          <h1 className="text-white font-bold font-inter mb-6 leading-tight text-left text-2xl sm:text-3xl">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
          <Button text="GET FREE CONSULTATION" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
