"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        repeatDelay: 0.5,
      }}
    >
      <p className="mb-2 text-sm font-medium">Scroll to explore</p>
      <ChevronDown className="h-6 w-6 animate-bounce" />
    </motion.div>
  )
}

