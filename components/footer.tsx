"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="py-6 text-center text-sm text-muted-foreground"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>© {currentYear} Saurav Kumar. All rights reserved.</p>
    </motion.footer>
  )
}

