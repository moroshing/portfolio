import { useRef, useState, useEffect, useCallback } from "react";

import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

import logoImg from "./assets/logo1.png";
import testImg from "./assets/test1.png";
import { techLogos } from "./utils/tLogos";

import HeroSection from "./sections/Hero";
import ContactSection from "./sections/Contact";
import ServicesSection from "./sections/Services";
import SkillsSection from "./sections/Skills";
import ProjectsSection from "./sections/Projects";

const preloadImages = (srcArray: string[]): Promise<void> => {
  const uniqueSrcs = Array.from(new Set(srcArray));
  return Promise.all(
    uniqueSrcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve(); // resolve anyway to continue
        })
    )
  ).then(() => undefined);
};

function App() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const worksRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const handleNavClick = useCallback(
    (ref: React.RefObject<HTMLElement | null>) => {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    []
  );

  const navItems = [
    { label: "Skills", ref: skillsRef },
    { label: "Projects", ref: worksRef },
    { label: "Home", ref: heroRef, logo: logoImg },
    { label: "Services", ref: servicesRef },
    { label: "Contact", ref: contactRef },
  ];

  useEffect(() => {
    const loadAssets = async () => {
      const imageList = [...techLogos, logoImg, testImg];
      await preloadImages(imageList);

      setFade(true);
      setTimeout(() => setLoading(false), 500);
    };

    loadAssets();
  }, []);

  if (loading) {
    return (
      <div
        className={`transition-opacity duration-500 ${
          fade ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Loading />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col">
      <Navbar items={navItems} onNavClick={handleNavClick} />
      <main className="relative z-10 flex-1 w-full max-w-full lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 lg:px-8">
        <section
          ref={heroRef}
          className="min-h-[60vh] py-14 scroll-mt-14 w-full"
        >
          <HeroSection />
        </section>

        <section
          ref={skillsRef}
          className="min-h-[60vh] py-14  scroll-mt-14 w-full"
        >
          <SkillsSection />
        </section>
        <section
          ref={worksRef}
          className="min-h-[60vh] py-14  scroll-mt-14 w-full"
        >
          <ProjectsSection />
        </section>
        <section
          ref={servicesRef}
          className="min-h-[60vh] py-14 scroll-mt-14 w-full"
        >
          <ServicesSection />
        </section>
      </main>

      <section
        ref={contactRef}
        className="min-h-screen pt-14 bg-black scroll-mt-14 w-full"
      >
        <div className="w-full max-w-full sm:max-w-[65vw] mx-auto px-4 sm:px-8 text-white">
          <ContactSection />
        </div>
      </section>

      <footer className="w-full max-w-full lg:max-w-[65vw] mx-auto text-center px-4 lg:px-8 py-4 text-xs sm:text-base">
        &copy; {new Date().getFullYear()}. Designed and Developed by Kyle David
        Caumeran
      </footer>
    </div>
  );
}

export default App;
