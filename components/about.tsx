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
import profileimg from "./assets/myprofile2.jpg";

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
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="group relative overflow-hidden rounded-lg">
              <div className="absolute -inset-2 rounded-lg"></div>
              <div className="relative h-[300px] w-[200px]">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGCUgJrlzFmWw/profile-displayphoto-shrink_800_800/B4DZX9R._JH4Ac-/0/1743711105874?e=1749081600&v=beta&t=eRM92KZK1dy-aKlpSG_13sXJ4xSQ0tq9vtsOlvY85eg"
                  alt="Saurav Kumar"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-8 text-lg">
              Highly motivated software developer passionate about building
              scalable web applications, learning new technologies, and solving
              real-world problems. I enjoy creating interactive and
              user-friendly experiences with modern web technologies.
            </p>

            <div className="mb-12">
              <h3 className="mb-4 text-xl font-semibold">Education</h3>
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-card/30 p-4 backdrop-blur-sm">
                  <p className="font-medium">
                    Rungta College of Engineering and Technology, Bhilai, CG
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Bachelor of Technology in Information Technology – 7.56 CGPA
                    (June 2022 – May 2026)
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card/30 p-4 backdrop-blur-sm">
                  <p className="font-medium">
                    Inter Mathurasini Mahavidyalaya Rajauli Nawada, Bihar
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Intermediate – 70% (April 2019 – May 2021)
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card/30 p-4 backdrop-blur-sm">
                  <p className="font-medium">
                    D.A.V Public School Daudnagar, Aurangabad, Bihar
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Matriculation – 84.6% (April 2018 – May 2019)
                  </p>
                </div>
              </div>
            </div>

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
