"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "IP Protection System",
    description: "AI-powered system detecting and protecting Disney's intellectual property on YouTube in real-time.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["YOLOv5", "TensorFlow", "OpenCV"],
    features: [
      "AI-powered system detecting and protecting Disney's intellectual property on YouTube in real-time",
      "Developed advanced video and audio analysis for content recognition",
      "Implemented real-time detection and automated takedown processes",
    ],
    github: "#",
    demo: "#",
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-gradient-to-r from-blue-600/20 to-indigo-600/20",
  },
  {
    id: 2,
    title: "Blockchain-Based Certificate Generation & Validation",
    description: "Built a decentralized app for issuing and validating certificates on the Ethereum blockchain.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Solidity", "React.js", "Node.js", "IPFS"],
    features: [
      "Built a decentralized app for issuing and validating certificates on the Ethereum blockchain",
      "Developed smart contracts in Solidity to create immutable, verifiable credentials",
      "Designed a React.js frontend with QR code support for seamless certificate validation",
    ],
    github: "#",
    demo: "#",
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-gradient-to-r from-purple-600/20 to-pink-600/20",
  },
  {
    id: 3,
    title: "RentBlee - E-commerce Rental Platform",
    description: "A rental platform allowing users to rent and vendors to list items.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "A rental platform allowing users to rent and vendors to list items",
      "Implemented JWT-based role authentication for secure access",
      "Designed a responsive UI and backend inventory management",
    ],
    github: "#",
    demo: "#",
    color: "from-emerald-600 to-teal-600",
    bgColor: "bg-gradient-to-r from-emerald-600/20 to-teal-600/20",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl ${project.bgColor}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-[250px] w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-70`}></div>
              </div>

              <div className="absolute bottom-0 w-full backdrop-blur-sm bg-black/30 p-6">
                <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                <p className="mb-4 text-sm text-white/80">{project.description.substring(0, 100)}...</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className={`rounded-full bg-white/20 px-2 py-1 text-xs text-white`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => setSelectedProject(project)}
                  className={`w-full bg-gradient-to-r ${project.color} transition-transform hover:scale-105 active:scale-95 border-none`}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="mb-4 h-[250px] w-full rounded-md object-cover"
                />

                <div className="mb-4">
                  <h4 className="mb-2 font-medium">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`rounded-full bg-gradient-to-r ${selectedProject.color} bg-opacity-10 px-3 py-1 text-sm text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-medium">Key Features</h4>
                  <ul className="list-inside list-disc space-y-1">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-transform hover:scale-105 active:scale-95"
                    asChild
                  >
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className={`bg-gradient-to-r ${selectedProject.color} transition-transform hover:scale-105 active:scale-95 border-none`}
                    asChild
                  >
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}

