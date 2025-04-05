"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import ScrollIndicator from "./scroll-indicator"

const AnimatedBackground = () => {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <Float key={i} speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]}>
            <octahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial color="#4f46e5" wireframe />
          </mesh>
        </Float>
      ))}
    </>
  )
}

const NameAura = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-xl filter"></div>
      <div className="relative">{children}</div>
    </div>
  )
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedBackground />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        style={{ opacity: 1 - scrollY / 500 }}
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <NameAura>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Hi, I&apos;m{" "}
              <motion.span className="text-primary" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Saurav Kumar
              </motion.span>
            </h1>
          </NameAura>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-8 text-xl md:text-2xl">Software Developer & Tech Enthusiast</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="transition-transform hover:scale-105 active:scale-95"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="transition-transform hover:scale-105 active:scale-95"
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

