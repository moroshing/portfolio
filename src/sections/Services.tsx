import { Paintbrush, Monitor, Code, Cpu, Server, Image } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Content Creation",
      description:
        "Strategic content development for digital platforms with SEO optimization and audience engagement.",
      icon: <Paintbrush className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      highlights: ["Blog Articles", "Social Media", "Video Content"],
    },
    {
      title: "Web Development",
      description:
        "Modern web applications built with React, Next.js, and cutting-edge frontend technologies.",
      icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      highlights: ["Responsive Design", "Web Apps", "Performance Optimization"],
    },
    {
      title: ".NET Development",
      description:
        "Specialized in Windows Forms applications to simplify and speed up everyday tasks.",
      icon: <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      highlights: [
        "WinForms Development",
        "Task Automation",
        "Custom Desktop Tools",
      ],
    },
    {
      title: "Remote IT Support",
      description:
        "Comprehensive technical assistance to ensure smooth and secure IT operations.",
      icon: <Monitor className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      highlights: [
        "Helpdesk Support",
        "System Maintenance",
        "Incident Management",
      ],
    },
    {
      title: "Graphic Design",
      description: "Clear, creative visuals for branding and marketing.",
      icon: <Image className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      highlights: [
        "Data Visualization",
        "Branded Assets",
        "Statistical Storytelling",
      ],
    },
    {
      title: "Custom PC Building",
      description:
        "Custom PCs and system upgrades for gaming, daily use, or high performance.",
      icon: <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      highlights: ["Gaming Rigs", "System Upgrades", "Budget Builds"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions blending technical expertise with creative
            vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-transparent"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-gray-600 transition-colors">
                  {service.icon}
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-800 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-200">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
