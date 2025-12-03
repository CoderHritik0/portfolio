import { useContext } from "react";
import { ProfileDetailsContext } from "../utils/context/ProfileDetailsContext";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const ProfileDetails = useContext(ProfileDetailsContext);

  return (
    <footer className="py-8 bg-slate-900 text-center text-slate-500 text-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-6 mb-4">
          <a
            target="_blank"
            href={ProfileDetails.personal_info.socials.github}
            className="hover:text-emerald-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            target="_blank"
            href={ProfileDetails.personal_info.socials.linkedin}
            className="hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            target="_blank"
            href={`mailto:${ProfileDetails.personal_info.email}`}
            className="hover:text-emerald-400 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
        <p>Designed & Built by {ProfileDetails.personal_info.name} in React</p>
      </div>
    </footer>
  );
}
