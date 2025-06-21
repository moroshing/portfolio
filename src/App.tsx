import {
  useRef,
  useState,
  useEffect,
  useCallback,
  Suspense,
  lazy,
} from "react";

import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

import HeroSkeleton from "./components/skeletons/HeroSkeleton";
import SkillsSkeleton from "./components/skeletons/SkillsSkeleton";
import ProjectsSkeleton from "./components/skeletons/ProjectsSkeleton";
import ServicesSkeleton from "./components/skeletons/ServicesSkeleton";
import ContactSkeleton from "./components/skeletons/ContactSkeleton";

import logoImg from "./assets/logo1.png";
import testImg from "./assets/test1.png";
import { techLogos } from "./utils/tLogos";
import GlowingDots from "./components/Background";

const HeroSection = lazy(() => import("./sections/Hero"));
const SkillsSection = lazy(() => import("./sections/Skills"));
const ProjectsSection = lazy(() => import("./sections/Projects"));
const ServicesSection = lazy(() => import("./sections/Services"));
const ContactSection = lazy(() => import("./sections/Contact"));

const preloadImages = (srcArray: string[]): Promise<void> => {
  const uniqueSrcs = Array.from(new Set(srcArray));
  return Promise.all(
    uniqueSrcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve();
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

  useEffect(() => {
    let id: number;

    if ("requestIdleCallback" in window) {
      id = requestIdleCallback(() => {
        import("./sections/Contact");
        import("./sections/Skills");
        import("./sections/Projects");
        import("./sections/Services");
      });
    } else {
      id = setTimeout(() => {
        import("./sections/Contact");
        import("./sections/Skills");
        import("./sections/Projects");
        import("./sections/Services");
      }, 2000) as unknown as number;
    }

    return () => {
      if ("cancelIdleCallback" in window && typeof id === "number") {
        cancelIdleCallback(id);
      } else {
        clearTimeout(id);
      }
    };
  }, []);

  return (
    <div
      className={`relative flex flex-col ${
        loading ? "overflow-hidden h-screen" : ""
      }`}
    >
      <GlowingDots />
      {(loading || fade) && (
        <div
          role="status"
          className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-500 ${
            fade ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Loading />
        </div>
      )}

      <Navbar items={navItems} onNavClick={handleNavClick} />
      <main className="relative z-10 flex-1 w-full max-w-full lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 lg:px-8">
        <section
          ref={heroRef}
          className="min-h-[60vh] py-14 scroll-mt-14 w-full"
        >
          <Suspense fallback={<HeroSkeleton />}>
            <HeroSection />
          </Suspense>
        </section>
        <section
          ref={skillsRef}
          className="min-h-[60vh] py-14  scroll-mt-14 w-full mt-20"
        >
          <Suspense fallback={<SkillsSkeleton />}>
            <SkillsSection />
          </Suspense>
        </section>
        <section
          ref={worksRef}
          className="min-h-[60vh] py-14  scroll-mt-14 w-full"
        >
          <Suspense fallback={<ProjectsSkeleton />}>
            <ProjectsSection />
          </Suspense>
        </section>
        <section
          ref={servicesRef}
          className="min-h-[60vh] py-14 scroll-mt-14 w-full"
        >
          <Suspense fallback={<ServicesSkeleton />}>
            <ServicesSection />
          </Suspense>
        </section>
      </main>
      <section
        ref={contactRef}
        className="min-h-screen bg-black scroll-mt-14 w-full flex items-center justify-center px-4 sm:px-8"
      >
        <div className="w-full max-w-[65vw] text-white">
          <Suspense fallback={<ContactSkeleton />}>
            <ContactSection />
          </Suspense>
        </div>
      </section>
      <footer className="w-full max-w-full bg-white mx-auto text-center px-4 lg:px-8 py-4 text-xs sm:text-base">
        &copy; {new Date().getFullYear()}. Designed and Developed by Kyle David
        Caumeran
      </footer>
    </div>
  );
}

export default App;
