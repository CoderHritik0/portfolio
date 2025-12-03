import SectionTitle from "./SectionTitle";
import { ProfileDetailsContext } from "../utils/context/ProfileDetailsContext";
import { useContext } from "react";

export default function Skills() {
  const ProfileDetails = useContext(ProfileDetailsContext);

  return (
    <section id="skills" className="py-24 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="A list of technologies I work with on a daily basis.">
          Skills & Technologies
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ProfileDetails.skills.map((skillGroup, idx) => (
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
  );
}
