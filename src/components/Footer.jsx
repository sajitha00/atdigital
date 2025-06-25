import React from "react";
import Logo from "../assets/Logo.png";

const Footer = () => (
  <footer className="bg-[#4F46E5] text-white w-full pt-10 pb-4 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
      {/* Logo and Description */}
      <div className="flex-1 flex flex-col items-start mb-8 md:mb-0 max-w-md">
        <div className="flex items-center mb-4">
          <img src={Logo} alt="AT Digital Logo" className="h-10 w-auto mr-3" />
        </div>
        <p className="text-sm leading-relaxed">
          Your goal is our target. Not anything in between. We use online
          marketing platforms and tools to achieve single objective — your
          business results.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-lg mb-4">Our Technologies</h3>
          <ul className="space-y-2 text-sm">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="font-bold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Horizontal line */}
    <div className="flex justify-center my-6">
      <div className="border-t border-white/30 w-100 md:w-160" />
    </div>

    {/* Bottom Row */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-white/90">
      <span>Privacy Policy</span>
      <span className="mx-2 hidden md:inline-block">|</span>
      <span>Terms & Conditions</span>
    </div>
  </footer>
);

export default Footer;
