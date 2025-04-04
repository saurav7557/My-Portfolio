"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Database,
  FileCode,
  GitBranch,
  Layout,
  Server,
  Settings,
  Users,
} from "lucide-react";
import myPic from "../assets/myprofile.jpg"; 

const skills = [
  {
    category: "Programming",
    items: ["JavaScript", "Python", "Java"],
    icon: <FileCode className="h-6 w-6" />,
  },
  {
    category: "Frontend",
    items: ["React.js", "Tailwind CSS", "HTML/CSS"],
    icon: <Layout className="h-6 w-6" />,
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
    icon: <Server className="h-6 w-6" />,
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
    icon: <Database className="h-6 w-6" />,
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "Figma"],
    icon: <GitBranch className="h-6 w-6" />,
  },
  {
    category: "Development",
    items: ["Agile"],
    icon: <Settings className="h-6 w-6" />,
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python"],
    icon: <Code className="h-6 w-6" />,
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Problem Solving", "Teamwork"],
    icon: <Users className="h-6 w-6" />,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Profile Picture Section */}
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="group relative h-[400px] w-[300px] overflow-hidden rounded-lg border-4 border-primary">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 blur-xl filter transition-opacity duration-1000 group-hover:opacity-75"></div>
              <img
                src={myPic} // 
                alt="My Profile"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* About Me Text Section */}
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-6 text-lg">
              Highly motivated software developer passionate about building
              scalable web applications, learning new technologies, and solving
              real-world problems. I enjoy creating interactive and
              user-friendly experiences with modern web technologies.
            </p>

            <h3 className="mb-4 text-xl font-semibold">My Skills</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group flex flex-col rounded-lg border border-border bg-card/50 p-4 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:bg-card/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mb-2 text-primary transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <h4 className="mb-2 font-medium">{skill.category}</h4>
                  <ul className="text-sm text-muted-foreground">
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
