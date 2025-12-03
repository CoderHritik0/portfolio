import { useContext } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { ProfileDetailsContext } from "../utils/context/ProfileDetailsContext";
import { ChevronRight } from "lucide-react";

export default function Projects() {
  const ProfileDetails = useContext(ProfileDetailsContext);

  return (
    <section id="projects" className="py-24 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Some things I've built.">
          Featured Projects
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProfileDetails.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        {ProfileDetails.projects.length > 3 && (
          <div className="mt-16 text-center">
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
          </div>
        )}
      </div>
    </section>
  );
}
