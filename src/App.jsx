import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ProfileDetailsContext } from "./utils/context/ProfileDetailsContext";
import { Terminal, Database, Layout, Server } from "lucide-react";

// --- Data Configuration ---
// customize your data here
const ProfileDetails = {
  personal_info: {
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
  },
  skills: [
    {
      category: "Frontend",
      icon: Layout,
      items: [
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
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
  ],
  projects: [
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
  ],
};

export default function App() {
  return (
    <ProfileDetailsContext.Provider value={ProfileDetails}>
      <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500/30">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </ProfileDetailsContext.Provider>
  );
}
