import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Github, ExternalLink } from "lucide-react";

import einvitesImg from "../assets/einvites.png";
import portfolioImg from "../assets/portfolio.png";
import bMonitorImg from "../assets/backupmonitor.png";

const projects = [
  {
    title: "Wedding RSVP Website",
    description:
      "A personalized RSVP and event site built for a client. Features include dynamic guest management and custom design.",
    tech: ["ReactJS", "TailwindCSS", "Vite"],
    github: "https://github.com/moroshing/wedding-rep-final",
    demo: "https://jennyandgerone.netlify.app",
    image: einvitesImg,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio designed to highlight technical skills, featured projects, and professional services.",
    tech: ["ReactTS", "TailwindCSS", "Vite"],
    github: "https://github.com/moroshing/portfolio",
    image: portfolioImg,
  },
  {
    title: "Backup Monitoring Tool",
    description:
      "A tool to monitor and verify backups from a POS system, reducing review time by 95%.",
    tech: [".NET", "C#", "GoogleAPIs"],
    github: "",
    demo: "",
    image: bMonitorImg,
  },
];

const ProjectsSection = () => (
  <div className="w-full max-w-6xl mx-auto px-4 py-12">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Featured Projects
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Transforming ideas into functional products that deliver real value
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="relative overflow-hidden group h-72 rounded-xl transition-transform hover:shadow-xl hover:scale-[1.02]"
        >
          {/* Blurred Background Image */}
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition duration-300 group-hover:blur-md"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

          {/* Content on Top */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
            <div>
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-200 mt-3">
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
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </Button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default ProjectsSection;
