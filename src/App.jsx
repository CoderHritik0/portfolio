import React, { useState, useEffect } from "react";
import NavLink from './components/NavLink';
import SectionTitle from './components/SectionTitle';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Menu,
  X,
  ChevronRight,
  Download,
  Send,
  Database,
  Layout,
  Server,
} from "lucide-react";

// --- Data Configuration ---
// customize your data here

const PERSONAL_INFO = {
  name: "Hritik Sanas",
  title: "Full Stack Engineer",
  tagline: "Building digital products, brands, and experiences.",
  about:
    "I am a passionate Full Stack Developer with expertise in building dynamic and responsive web applications. Skilled in both front-end and back-end technologies, I thrive on creating seamless user experiences and efficient server-side solutions.",
  email: "hritiksanas47@gmail.com",
  socials: {
    github: "https://github.com/CoderHritik0",
    linkedin: "https://www.linkedin.com/in/hritik-sanas-1141a9285/",
  },
};

const SKILLS = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Python", "PostgreSQL", "Django"],
  },
  {
    category: "Tools",
    icon: Terminal,
    items: ["Git", "postman"],
  },
  {
    category: "Architecture",
    icon: Database,
    items: ["REST APIs"],
  },
];

const PROJECTS = [
  {
    title: "News App",
    description:
      "NewsApp is a news app which can be used to grab quick daily news bites. If you are interested in news, weather, politics and sports news, NewsApp is for you!",
    tags: ["React", "NewsAPI", "Bootstrap"],
    link: "",
    github: "https://github.com/CoderHritik0/News-App",
  },
  {
    title: "Two-Way Sign Translator",
    description:
      "This project aims to bridge the communication gap between the hearing and speech-impaired communities and the rest of the world. It utilizes computer vision and machine learning techniques to recognize sign language gestures in real-time and translates them into text or speech. The system employs a camera to capture hand movements, processes the video feed using OpenCV, and leverages a trained TensorFlow model to classify the gestures. The translated output is then displayed on the screen or converted to speech using text-to-speech technology. This innovative solution enhances accessibility and fosters better communication for individuals relying on sign language.",
    tags: ["Python", "OpenCV", "TensorFlow", "Flask"],
    link: "",
    github: "https://github.com/CoderHritik0/Sign-Language-Translator",
  },
  {
    title: "Wisdom Warehouse",
    description:
      "Wisdom Warehouse is a Django-based notes management application built to help users easily create, organize, and manage their personal notes. With features like tagging, image attachments, secure authentication, and a modern responsive UI, it provides a smooth, efficient, and clutter-free note-taking experience. Whether you're storing ideas, tasks, or personal information, Wisdom Warehouse keeps everything organized in one place.",
    tags: ["Django", "Python", "HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://hritiksanas.pythonanywhere.com/",
    github: "https://github.com/CoderHritik0/Wisdom-Warehouse-Django",
  },
];

// const EXPERIENCE = [
//   {
//     company: "TechFlow Systems",
//     role: "Senior Frontend Engineer",
//     period: "2021 - Present",
//     description:
//       "Leading the frontend team in migrating a legacy monolith to a micro-frontend architecture. Improved load times by 40%.",
//   },
//   {
//     company: "Creative Digital Agency",
//     role: "Full Stack Developer",
//     period: "2019 - 2021",
//     description:
//       "Built custom web solutions for enterprise clients. Managed end-to-end development lifecycle from concept to deployment.",
//   },
//   {
//     company: "StartUp Inc",
//     role: "Junior Web Developer",
//     period: "2018 - 2019",
//     description:
//       "Collaborated with designers to implement responsive UI components. Assisted in backend API development using Express.",
//   },
// ];

// --- Components ---

// const NavLink = ({ href, children, mobile, onClick }) => (
//   <a
//     href={href}
//     onClick={onClick}
//     className={`text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium ${
//       mobile ? "block py-4 text-xl" : ""
//     }`}
//   >
//     {children}
//   </a>
// );

// const SectionTitle = ({ children, subtitle }) => (
//   <div className="mb-12">
//     <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
//       <span className="text-emerald-400 mr-2">#</span>
//       {children}
//     </h2>
//     {subtitle && <p className="text-slate-400 max-w-2xl">{subtitle}</p>}
//   </div>
// );

// const ProjectCard = ({ project }) => (
//   <div className="group bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10">
//     <div className="p-6 md:p-8">
//       <div className="flex justify-between items-start mb-6">
//         <div className="p-3 bg-slate-900/50 rounded-lg text-emerald-400 group-hover:text-emerald-300 transition-colors">
//           <Code2 size={24} />
//         </div>
//         <div className="flex gap-4">
//           <a
//             href={project.github}
//             className="text-slate-400 hover:text-white transition-colors"
//           >
//             <Github size={20} />
//           </a>
//           {project.link && <a
//             href={project.link}
//             className="text-slate-400 hover:text-emerald-400 transition-colors"
//           >
//             <ExternalLink size={20} />
//           </a>}
//         </div>
//       </div>

//       <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">
//         {project.title}
//       </h3>
//       <p className="text-slate-400 mb-6 line-clamp-3">{project.description}</p>

//       <div className="flex flex-wrap gap-2 mt-auto">
//         {project.tags.map((tag, i) => (
//           <span
//             key={i}
//             className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   </div>
// );

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-slate-800"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-bold text-emerald-400 tracking-tighter"
          >
            &lt;Hritik /&gt;
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="https://drive.google.com/file/d/1KsxJyXVqf22-T_S4nbRPt4GM2braaFfg/view?usp=sharing"
              target="_blank"
              className="px-4 py-2 text-sm font-medium text-emerald-400 border border-emerald-400 rounded hover:bg-emerald-400/10 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-200 hover:text-emerald-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col items-center shadow-2xl">
            <NavLink mobile href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
            <NavLink mobile href="#skills" onClick={() => setIsMenuOpen(false)}>
              Skills
            </NavLink>
            <NavLink
              mobile
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              mobile
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-emerald-400 font-mono mb-4 text-lg">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
              {PERSONAL_INFO.name}.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 tracking-tight">
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
              {PERSONAL_INFO.tagline} {PERSONAL_INFO.about}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-emerald-500 text-slate-900 font-bold rounded hover:bg-emerald-400 transition-all duration-300 text-center"
              >
                Check out my work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-slate-600 text-slate-200 font-medium rounded hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 text-center"
              >
                Get in touch
              </a>
            </div>

            <div className="flex items-center gap-6 mt-12">
              <a
                href={PERSONAL_INFO.socials.github}
                className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="A list of technologies I work with on a daily basis.">
            Skills & Technologies
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <skillGroup.icon className="text-emerald-400" size={24} />
                  <h3 className="text-xl font-bold text-slate-100">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm text-slate-300 bg-slate-900/50 px-3 py-1 rounded border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Some things I've built.">
            Featured Projects
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>

          {PROJECTS.length > 3 && <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium group"
            >
              View Full Project Archive
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-emerald-400 font-mono mb-4">What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 max-w-lg mx-auto text-left">
            <Contact />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-center text-slate-500 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href={PERSONAL_INFO.socials.github}
              className="hover:text-emerald-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              className="hover:text-emerald-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-emerald-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <p>Designed & Built by {PERSONAL_INFO.name}</p>
        </div>
      </footer>
    </div>
  );
}
