import { forwardRef } from "react";
import Marquee from "react-fast-marquee";
import testImg from "../assets/test1.png";
import { Badge } from "../components/ui/badge";
import { Check } from "lucide-react";
import { techLogos } from "../utils/tLogos";

interface HeroSectionProps {}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>((_, ref) => {
  return (
    <section ref={ref} className="py-10 lg:py-36">
      <div className="flex flex-col lg:flex-row w-full items-center gap-8">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-0 order-2 lg:order-1">
          <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-xl">
            Hey there! I'm
          </h3>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-gray-800 dark:text-gray-200 font-bold mb-2 lg:mb-4 ">
            Moroching.
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Software Developer
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="default">Frontend</Badge>
            <Badge variant="secondary">Backend</Badge>
            <Badge variant="outline">Full-Stack</Badge>
            <Badge className="bg-green-600 text-white hover:bg-green-700">
              <Check className="w-4 h-4 mr-1" />
              Open to Work
            </Badge>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
            I build applications that simplify tasks, automate workflows, and
            reduce manual effort so people can focus on what matters most.
          </p>
        </div>

        {/* Right: Image */}
        <div className="order-1 lg:order-2">
          <img
            src={testImg}
            alt="Profile"
            className="w-48 sm:w-64 lg:w-80 h-auto object-contain"
            draggable={false}
          />
        </div>
      </div>
      <Marquee className="mt-60" gradient={true} speed={50}>
        {techLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt=""
            className="h-12 w-auto mx-4 object-contain grayscale hover:grayscale-0 transition duration-300"
            draggable={false}
          />
        ))}
      </Marquee>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
