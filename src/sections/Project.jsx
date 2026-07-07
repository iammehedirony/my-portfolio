import project1 from "../assets/AiChat.png";
import project2 from "../assets/YtClone.png";
import project3 from "../assets/ecommerce.png";
import { GoArrowUpRight } from "react-icons/go";
import { FaJs, FaReact, FaNodeJs, FaDocker, FaStore } from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiMongodb, SiNextdotjs, SiMongoose, SiPrisma } from "react-icons/si";
import ShinyText from "../components/ShinyText";
import { motion } from "framer-motion";
import SplitText from "../components/SplitText";

const projects = [
  {
    title: "Ai ChatApp",
    description:
      "A modern, full-stack AI chat application built with Next.js, featuring multi-model AI support, real-time streaming, and persistent chat history. Experience seamless conversations with various AI models through a beautiful, intuitive interface.",
    techStack: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "TailwindCss",
      "Zustand",
    ],
    image: project1,
    aosImage: "fade-left",
    codeLink: "https://github.com/iammehedirony/Ai-ChatApp",
  },
  {
    title: "Youtube Clone Streaming Platform",
    description:
      "A full-stack YouTube-like application built with React and Express/MongoDB. It allows users to upload and watch videos, create and manage playlists and tweets, like/dislike content, subscribe to channels, comment, and track watch history or save videos for later — all in a modern, responsive UI.",
    techStack: ["JavaScript", "React", "Node & Express", "MongoDB", "Mongoose"],
    image: project2,
    aosImage: "fade-right",
    codeLink: "https://github.com/iammehedirony/Youtube-Clone",
  },
  {
    title: "Next Ecommerce Site",
    description:
      "Next-Ecommerce is a modern full-stack e-commerce platform designed to provide a seamless shopping experience. Users, sellers, and admins each have tailored dashboards and tools, making buying, selling, and managing products effortless. Built with Next.js and Express.js, it combines performance, security, and intuitive design.",
    techStack: [
      "TypeScript",
      "Next.js",
      "Node & Express",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    image: project3,
    aosImage: "fade-left",
    codeLink: "https://github.com/iammehedirony/Next-Ecommerce",
  },
];
const Projects = () => {
  const techMap = {
    JavaScript: { icon: FaJs },
    React: { icon: FaReact },
    "Node & Express": { icon: FaNodeJs },
    Mongoose: { icon: SiMongoose },
    MongoDB: { icon: SiMongodb },
    TypeScript: { icon: BiLogoTypescript },
    "Next.js": { icon: SiNextdotjs },
    PostgreSQL: { icon: BiLogoPostgresql },
    Prisma: { icon: SiPrisma },
    Docker: { icon: FaDocker },
    Zustand: { icon: FaStore },
    TailwindCss: { icon: RiTailwindCssFill },
  };

  return (
    <div id="project" className="max-w-screen-xl py-20 mx-auto px-4 lg:px-8">
      <section>
        <div className="mb-12">
          <SplitText
            text="Projects I’ve Built"
            className="mb-2 text-3xl font-bold text-white"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <h2 className=""></h2>
          <p className="text-sm font-medium">
            Here's some of my projects that I have worked on.
          </p>
        </div>
        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative grid md:grid-cols-12 gap-4 items-center"
            >
              {/* Project Image */}
              <div
                className="md:col-span-7 relative"
                data-aos={project.aosImage}
              >
                <div className="relative h-[300px] rounded overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description[0]} project screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover brightness-50 hover:brightness-100 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="md:col-span-5 md:pl-6" data-aos="fade-up">
                <ShinyText
                  text="Featured Project"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
                <div className="flex items-center justify-between mb-4">
                  {" "}
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <a href={project.codeLink} target="_blank">
                    <GoArrowUpRight color="#3CCF91" size={40} />
                  </a>
                </div>

                <div className="flex flex-wrap my-2">
                  {techMap &&
                    project.techStack.map((tech, index) => {
                      const Icon = techMap[tech]?.icon;

                      return (
                        <div
                          key={index}
                          className={`flex items-center gap-2 text-sm font-medium mr-2 mb-2 px-2 py-1 rounded text-white`}
                        >
                          {Icon && <Icon className="w-4 h-4" />}{" "}
                          {/* icon ke call kora */}
                          <span>{tech}</span>
                        </div>
                      );
                    })}
                </div>

                <div className="rounded-lg shadow-xl text-[#8b9090] mb-3">
                  <p>{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
