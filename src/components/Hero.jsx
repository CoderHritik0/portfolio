import { useContext } from "react";
import { ProfileDetailsContext } from "../utils/context/ProfileDetailsContext";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const PERSONAL_INFO = useContext(ProfileDetailsContext).personal_info;
  
  const handleLinkClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-10 relative overflow-hidden"
    >
      <div className="container bg-slate-800/30 mx-auto p-6 w-fit border border-emerald-500 rounded-lg shadow-md shadow-emerald-500">
        <div className="max-w-xl">
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

          <div className="flex justify-end flex-col sm:flex-row gap-4">
            <a
            onClick={() => handleLinkClick('projects')}
              className="px-8 py-4 bg-emerald-500 text-slate-900 font-bold rounded hover:bg-emerald-400 transition-all duration-300 text-center"
            >
              Check out my work
            </a>
            <a
            onClick={() => handleLinkClick('contact')}
              // href="#"
              className="px-8 py-4 border border-slate-600 text-slate-200 font-medium rounded hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 text-center"
            >
              Get in touch
            </a>
          </div>

          <div className="flex justify-end items-center gap-6 mt-12">
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
  );
}
