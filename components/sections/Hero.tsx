"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import Link from "next/link"

const TITLES = [
  "DevOps Engineer",
  "Cloud Engineer",
  "Platform Engineer",
  "Site Reliability Engineer"
]

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-600 p-1 mb-8 shadow-2xl relative"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-black/50">
              <img 
                src="/profile.png" 
                alt="Shaikh Mazein Ahmed" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Hi, I'm <span className="text-gradient">Shaikh Mazein Ahmed</span>
          </motion.h1>

          <div className="h-12 md:h-16 flex items-center justify-center overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={titleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-4xl font-semibold text-slate-300"
              >
                {TITLES[titleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl"
          >
            I build scalable infrastructure, automate CI/CD pipelines, and architect resilient cloud solutions that bridge the gap between development and production.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <a 
              href="/Shaikh_Mazein_Ahmed_Resume-2.pdf" 
              target="_blank" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            
            <Link 
              href="#projects" 
              className="px-8 py-3 rounded-full glass hover:bg-white/10 text-slate-200 font-medium flex items-center gap-2 transition-all"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link 
              href="#contact" 
              className="px-8 py-3 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 font-medium transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
