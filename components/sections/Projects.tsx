"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ExternalLink, FolderGit2 } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const PROJECTS = [
  {
    title: "Cloud Expense Tracker",
    description: "An automated tracking system to monitor, alert, and optimize cloud expenditures across multiple environments.",
    tech: ["AWS", "Python", "Terraform", "Docker"],
    link: "https://github.com/shaikhmazz",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "End-to-end automated deployment pipelines ensuring seamless testing and delivery of microservices.",
    tech: ["Jenkins", "Docker", "Kubernetes", "GitHub Actions"],
    link: "https://github.com/shaikhmazz",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Kubernetes Monitoring Dashboard",
    description: "A centralized observability platform providing real-time metrics, logs, and alerts for Kubernetes clusters.",
    tech: ["Prometheus", "Grafana", "Alertmanager"],
    link: "https://github.com/shaikhmazz",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Fetal Anemia Detection",
    description: "Deep learning pipeline to process ultrasound imagery and predict early risk of fetal anemia non-invasively.",
    tech: ["Python", "TensorFlow", "Deep Learning"],
    link: "https://github.com/shaikhmazz",
    color: "from-rose-500 to-red-500"
  },
  {
    title: "Face Recognition Attendance",
    description: "Machine learning-based attendance system utilizing facial recognition for contactless tracking.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    link: "https://github.com/shaikhmazz",
    color: "from-amber-500 to-orange-500"
  }
]

export function Projects() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section id="projects" className="py-24 relative z-10">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-blue-400">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div className="flex gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
