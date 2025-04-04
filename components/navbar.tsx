"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full ${
        scrolled ? "backdrop-blur-md bg-background/70" : "bg-transparent"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.a href="#" className="text-xl font-bold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Saurav Kumar
        </motion.a>

        <div className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </motion.nav>
  )
}

