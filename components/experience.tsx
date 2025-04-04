"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Award, GraduationCap, Calendar } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Software Engineer Intern",
    organization: "Tech Company",
    date: "Jun 2023 - Aug 2023",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with the team to implement new features and fix bugs.",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Advanced DSA Certification",
    organization: "Online Learning Platform",
    date: "Apr 2023",
    description:
      "Completed an intensive course on advanced data structures and algorithms, covering topics like dynamic programming, graphs, and complex problem-solving techniques.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Job Simulation",
    organization: "Major Tech Corporation",
    date: "Feb 2023",
    description:
      "Participated in a virtual job simulation program, working on real-world projects and gaining practical experience in software development.",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Student Ambassador",
    organization: "Tech Education Program",
    date: "Jan 2023 - Present",
    description:
      "Representing the organization on campus, organizing tech events, and helping fellow students learn about new technologies and opportunities.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Experience & Certifications
        </motion.h2>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 ml-6 h-full w-0.5 bg-primary md:left-1/2 md:-ml-0.5"></div>

          {/* Timeline items */}
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className={`flex md:justify-${index % 2 === 0 ? "end" : "start"}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-4 flex items-center">
                      <div className="mr-3 rounded-full bg-primary/10 p-2 text-primary">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.organization}</p>
                      </div>
                    </div>
                    <p className="mb-3 text-sm">{item.description}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-0 top-6 z-10 ml-4 h-4 w-4 rounded-full bg-primary md:left-1/2 md:-ml-2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

