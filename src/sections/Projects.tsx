import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Github, ExternalLink } from "lucide-react";

import einvitesImg from "../assets/einvites.png";
import portfolioImg from "../assets/portfolio.png";
import bMonitorImg from "../assets/backupmonitor.png";
import monifloImg from "../assets/moniflo.png";

const projects = [
  {
    title: "Wedding RSVP",
    description:
      "A personalized RSVP and event site built for a client. Features include dynamic guest management and custom design.",
    tech: ["ReactJS", "TailwindCSS", "Vite"],
    github: "https://github.com/moroshing/wedding-rep-final",
    demo: "https://jennyandgerone.netlify.app",
    image: einvitesImg,
  },
  {
    title: "Portfol.io",
    description:
      "A modern, responsive portfolio designed to highlight technical skills, featured projects, and professional services.",
    tech: ["ReactTS", "TailwindCSS", "Vite"],
    github: "https://github.com/moroshing/portfolio",
    demo: "https://dev-moro.netlify.app/",
    image: portfolioImg,
  },
  {
    title: "Backup Monitoring Tool",
    description:
      "A monitoring tool that automatically verifies backups from Pryce Gases Inc.'s POS system, reducing manual review time by 95%.",
    tech: [".NET", "C#", "GoogleAPIs"],
    image: bMonitorImg,
  },
  {
    title: "Moniflo",
    description:
      "A simple and intuitive app to track your expenses and income, helping you stay on top of your finances.",
    tech: ["ReactTS", "Firebase", "MaterialUI"],
    // github: "https://github.com/moroshing/expense-tracker",
    demo: "https://moniflo.netlify.app/",
    image: monifloImg,
  },
  {
    title: "More Projects Coming Soon",
    description:
      "Stay tuned for more exciting and useful tools, web applications, and more.",
    tech: [],
  },
];

const ProjectsSection = () => (
  <section
    id="projects"
    className="py-10 px-4 sm:px-6 lg:px-8 dark:bg-gray-900"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Transforming ideas into functional products that deliver real value
        </p>
      </div>
      {/* Mobile View: Horizontal Scroll */}
      <div className="sm:hidden w-full overflow-hidden">
        <div className="overflow-x-auto flex gap-4 px-4 pb-4 snap-x snap-mandatory">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`snap-start min-w-[280px] max-w-[300px] w-full aspect-square flex-shrink-0 rounded-xl relative overflow-hidden group transition-transform hover:shadow-xl hover:scale-[1.02] ${
                project.title === "More Projects Coming Soon"
                  ? "flex items-center justify-center text-center"
                  : ""
              }`}
            >
              {project.title === "More Projects Coming Soon" ? (
                <>
                  <div className="absolute inset-0 bg-black/85 sm:group-hover:bg-gray-700 transition duration-300"></div>
                  <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center text-white">
                    <h2 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-300 max-w-xs">
                      {project.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition duration-300 group-hover:blur-md"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                    <div>
                      <h2 className="text-2xl font-semibold truncate">
                        {project.title}
                      </h2>
                      <p className="text-sm text-gray-200 mt-3 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, idx) => (
                        <Badge
                          key={idx}
                          className="bg-white/10 text-white border-white/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.github || project.demo ? (
                      <div className="flex gap-3 pt-4">
                        {project.github && (
                          <Button
                            asChild
                            className="flex items-center gap-1 border border-white/30 text-white hover:bg-white/10"
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4" /> Code
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button
                            asChild
                            className="flex items-center gap-1 bg-white text-black hover:bg-gray-200"
                          >
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-2 h-2" /> Live
                            </a>
                          </Button>
                        )}
                      </div>
                    ) : (
                      <div className="pt-12" />
                    )}
                  </div>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
      {/* Desktop/Tablet View: Grid Layout */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden group h-64 sm:h-72 rounded-xl transition-transform hover:shadow-xl hover:scale-[1.02] ${
              project.title === "More Projects Coming Soon"
                ? "flex items-center justify-center text-center"
                : ""
            }`}
          >
            {project.title === "More Projects Coming Soon" ? (
              <>
                <div className="absolute inset-0 bg-black/85 sm:group-hover:bg-black transition duration-300"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center text-white">
                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-300 max-w-xs">
                    {project.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition duration-300 group-hover:blur-md"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  <div>
                    <h2 className="text-2xl font-semibold truncate">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-200 mt-3 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-white/10 text-white border-white/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.github || project.demo ? (
                    <div className="flex gap-3 pt-4">
                      {project.github && (
                        <Button
                          asChild
                          className="flex items-center gap-1 border border-white/30 text-white hover:bg-white/10"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" /> Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          asChild
                          className="flex items-center gap-1 bg-white text-black hover:bg-gray-200"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-2 h-2" /> Live
                          </a>
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className="pt-12" />
                  )}
                </div>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
