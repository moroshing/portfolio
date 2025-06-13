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
} from "react-icons/si";
import { Video } from "lucide-react";

const skills = [
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <SiReact className="text-blue-500" /> },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-800 dark:text-gray-200" />,
      },
      { name: "CodeIgniter", icon: <SiCodeigniter className="text-red-500" /> },
    ],
  },
  {
    category: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3078c6]" /> },
      { name: "PHP", icon: <SiPhp className="text-[#4f5b93]" /> },
      { name: "C#", icon: <SiDotnet className="text-[#7030a1]" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "SQLite", icon: <SiSqlite className="text-[#003b57]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: <SiGithub className="text-gray-600" /> },
      { name: "CapCut", icon: <Video className="text-black" /> },
      { name: "Canva", icon: <SiCanva className="text-[#4664dd]" /> },
      { name: "Figma", icon: <SiFigma className="text-orange-500" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8  dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Core technologies and development tools
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((group, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white dark:bg-gray-700 px-3 py-1.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 shadow-sm"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
