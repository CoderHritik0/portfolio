import { icons } from "lucide-react";
import { createContext } from "react";

export const ProfileDetailsContext = createContext({
  personal_info: {
    name: "",
    title: "",
    tagline: "",
    about: "",
    socials: {
      github: "",
      linkedin: "",
    },
  },
  skills: [
    {
      category: "",
      icon: icons,
      items: [""],
    },
  ],
  experience: [
    {
      company: "",
      role: "",
      period: "",
      description: "",
    },
  ],
  projects: [
    {
      title: "",
      description: "",
      tags: [""],
      link: "",
      github: "",
    },
  ],
});
