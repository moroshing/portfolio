import { Mail, Linkedin, FileText } from "lucide-react";

const ContactSection = () => (
  <div className="flex flex-col items-center justify-center gap-8 text-center w-full">
    <h2 className="sm:text-4xl md:text-5xl text-3xl font-bold text-white">
      Keep in Touch.
    </h2>
    <p className="text-lg text-gray-300 max-w-xl">
      I specialize in <span className="text-blue-400">Web Development</span> and{" "}
      <span className="text-blue-400">Content Creation</span>. Have a project in
      mind? Keep in touch and let's make it happen!
    </p>

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
      <a
        href="mailto:kyledavid.caumeran@gmail.com"
        className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/kyle-david-caumeran-a36885247/"
        className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-blue-500/90 text-white font-semibold hover:bg-blue-600 transition-colors duration-300 text-sm sm:text-base"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
        LinkedIn
      </a>
      <a
        href="/resume.pdf"
        download="Kyle-David-Caumeran-Resume.pdf"
        className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-gray-700/80 text-white font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
        Resume
      </a>
    </div>
  </div>
);

export default ContactSection;
