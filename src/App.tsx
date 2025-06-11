import { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/Hero";
import Loading from "./components/Loading";
import logoImg from "./assets/test.png";

function App() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const worksRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const handleNavClick = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navItems = [
    { label: "Skills", ref: skillsRef },
    { label: "Projects", ref: worksRef },
    { label: "Home", ref: heroRef, logo: logoImg }, // Add logo here
    { label: "Services", ref: servicesRef },
    { label: "Contact", ref: contactRef },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 1800);
    const timer2 = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  if (loading) {
    return (
      <div
        className={`transition-opacity duration-300 ${
          fade ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Loading />
      </div>
    );
  }

  return (
    <div className="relative">
      <Navbar items={navItems} onNavClick={handleNavClick} />

      <div className="w-full max-w-full sm:max-w-[60vw] mx-auto">
        <section ref={heroRef} className="min-h-screen pt-14 scroll-mt-14">
          <HeroSection />
        </section>
        <section
          ref={skillsRef}
          className="min-h-screen pt-14 bg-gray-100 scroll-mt-14"
        >
          <div>Features Content</div>
        </section>
        <section ref={worksRef} className="min-h-screen pt-14 scroll-mt-14">
          <div>Projects</div>
        </section>
        <section
          ref={servicesRef}
          className="min-h-screen pt-14 bg-gray-100 scroll-mt-14"
        >
          <div>Services</div>
        </section>
      </div>
      <section
        ref={contactRef}
        className="min-h-screen pt-14 bg-black scroll-mt-14 w-full"
      >
        <div className="max-w-full sm:max-w-[60vw] mx-auto px-4 text-white">
          Contact
        </div>
      </section>
      <footer className="w-full text-center py-4">
        &copy; {new Date().getFullYear()}, Kyle David S. Caumeran
      </footer>
    </div>
  );
}

export default App;
