"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export default function ResumeDownload() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <FileText className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="mb-4 text-3xl font-bold">My Resume</h2>
            <p className="mb-8 max-w-2xl text-center text-muted-foreground">
              Download my resume to learn more about my education, skills, projects, and experience.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="group flex items-center gap-2" asChild>
                <a href="/resume.pdf" download="Saurav_Kumar_Resume.pdf">
                  <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

