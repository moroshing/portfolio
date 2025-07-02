import { useState } from "react";
import {
  SiReact,
  SiExpress,
  SiCodeigniter,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiDotnet,
  SiMysql,
  SiGithub,
  SiCanva,
  SiSqlite,
  SiMongodb,
  SiFigma,
  SiWordpress,
} from "react-icons/si";
import { BsCameraVideo } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <SiReact className="text-blue-400" /> },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-800 dark:text-gray-200" />,
      },
      { name: "CodeIgniter", icon: <SiCodeigniter className="text-red-400" /> },
    ],
  },
  {
    category: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "PHP", icon: <SiPhp className="text-[#8a93bd]" /> },
      { name: "C#", icon: <SiDotnet className="text-purple-600" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "SQLite", icon: <SiSqlite className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    category: "CMS",
    items: [
      { name: "Wordpress", icon: <SiWordpress className="text-[#2a97c2]" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "GitHub",
        icon: <SiGithub className="text-gray-800 dark:text-gray-200" />,
      },
      {
        name: "CapCut",
        icon: <BsCameraVideo className="text-gray-800 dark:text-gray-200" />,
      },
      { name: "Canva", icon: <SiCanva className="text-[#7d2ae8]" /> },
      { name: "Figma", icon: <SiFigma className="text-orange-500" /> },
    ],
  },
];

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const allCategories = ["All", ...skills.map((group) => group.category)];
  const filteredSkills =
    activeFilter === "All"
      ? skills.flatMap((group) => group.items)
      : skills.find((group) => group.category === activeFilter)?.items || [];

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Original title size */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Toolbox
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Core technologies and development tools I work with
          </p>
        </div>

        {/* Compact filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Compact skills grid with transitions */}
        <AnimatePresence mode="wait">
          <div className="min-h-[400px]">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-all"
                >
                  <span className="text-4xl mb-2">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
