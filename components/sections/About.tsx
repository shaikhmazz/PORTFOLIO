"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Terminal, Server, Code, Zap } from "lucide-react"

function AnimatedCounter({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000 // 2 seconds
      const incrementTime = Math.abs(Math.floor(duration / end))

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(timer)
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 glass-card border border-white/5">
      <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
        {count}{suffix}
      </h4>
      <p className="text-sm text-slate-400 font-medium text-center">{label}</p>
    </div>
  )
}

export function About() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section id="about" className="py-24 relative z-10">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-cyan-400">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-slate-300 text-lg leading-relaxed"
          >
            <p>
              I am a <strong className="text-white">Computer Science Graduate (Class of 2026)</strong> with a deep passion for building robust, scalable infrastructure. My journey started with development, but I quickly realized that deploying and maintaining software is where the real magic happens.
            </p>
            <p>
              I specialize in <strong className="text-cyan-400">Cloud Computing, DevOps, Automation, CI/CD, Linux, AWS, and Kubernetes</strong>. I don't just write code; I ensure it runs seamlessly in production environments.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-3 glass rounded-lg text-cyan-400"><Terminal size={20}/></div>
                <span className="font-medium">Automation First</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 glass rounded-lg text-purple-400"><Server size={20}/></div>
                <span className="font-medium">Cloud Native</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 glass rounded-lg text-blue-400"><Code size={20}/></div>
                <span className="font-medium">Infrastructure as Code</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 glass rounded-lg text-green-400"><Zap size={20}/></div>
                <span className="font-medium">High Performance</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <AnimatedCounter value={5} label="Major Projects" suffix="+" />
            <AnimatedCounter value={4} label="Certifications" />
            <AnimatedCounter value={20} label="Technologies Mastered" suffix="+" />
            <AnimatedCounter value={500} label="GitHub Contributions" suffix="+" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
