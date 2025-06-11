import { forwardRef } from "react";

interface HeroSectionProps {
  // Add any props you need
}

import testImg from "../assets/test.png";

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>((_, ref) => (
  <section ref={ref} className="w-full h-screen flex items-center pt-24">
    <div className="flex w-full max-w-[60vw] px-8">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-2">Kyle David S. Caumeran</h1>
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Software Developer
        </h2>
        <p className="text-lg text-gray-700 max-w-xl">
          I build applications that simplify tasks, automate workflows, and
          reduce manual effort so people can focus on what matters most.
        </p>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={testImg}
          alt="Profile"
          className="w-64 h-64 object-contain"
          draggable={false}
        />
      </div>
    </div>
  </section>
));

HeroSection.displayName = "HeroSection"; // Helps with debugging
export default HeroSection;
