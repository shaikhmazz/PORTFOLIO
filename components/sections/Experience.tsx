"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Award, Briefcase, GraduationCap } from "lucide-react"

const TIMELINE = [
  {
    type: "education",
    title: "B.E. in Computer Science",
    subtitle: "Muffakham Jah College of Engineering and Technology",
    date: "Graduated 2026",
    description: "Focusing on Cloud Computing, Distributed Systems, and DevOps.",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-blue-500"
  },
  {
    type: "experience",
    title: "DevOps & Cloud Engineer (Projects)",
    subtitle: "Self-Driven / Academic",
    date: "2024 - Present",
    description: "Architected and deployed highly available CI/CD pipelines, containerized applications, and monitored infrastructure.",
    icon: <Briefcase className="w-5 h-5" />,
    color: "bg-cyan-500"
  }
]

const CERTIFICATIONS = [
  "AWS Cloud Practitioner",
  "Linux Essentials",
  "Docker Fundamentals",
  "Kubernetes Basics"
]

export function Experience() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section id="experience" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6" ref={containerRef}>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & <span className="text-pink-400">Certifications</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10"></div>
            
            <div className="space-y-12">
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-20"
                >
                  <div className={`absolute left-4 top-0 w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] z-10 ring-4 ring-[#0a0a1a]`}>
                    {item.icon}
                  </div>
                  
                  <div className="glass-card p-6 relative before:absolute before:left-[-10px] before:top-4 before:border-y-[10px] before:border-y-transparent before:border-r-[10px] before:border-r-white/10">
                    <span className="text-sm text-cyan-400 font-mono mb-2 block">{item.date}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <h4 className="text-slate-400 font-medium mb-4">{item.subtitle}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-8 h-full flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-pink-400" /> Active Certifications
              </h3>
              
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                    <span className="text-lg text-slate-200 font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}
