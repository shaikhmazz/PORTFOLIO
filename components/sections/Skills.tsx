"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Cloud, Cog, Terminal, Code, Activity, Hexagon } from "lucide-react"

const SKILLS_DATA = [
  {
    category: "Cloud",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS", "Azure", "GCP"],
    color: "from-blue-400 to-cyan-400"
  },
  {
    category: "DevOps",
    icon: <Cog className="w-6 h-6" />,
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Ansible"],
    color: "from-purple-400 to-pink-400"
  },
  {
    category: "Operating Systems",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Linux", "Ubuntu", "Bash"],
    color: "from-green-400 to-emerald-500"
  },
  {
    category: "Programming",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python", "Java", "C++"],
    color: "from-yellow-400 to-orange-500"
  },
  {
    category: "Monitoring",
    icon: <Activity className="w-6 h-6" />,
    skills: ["Prometheus", "Grafana", "ELK Stack"],
    color: "from-red-400 to-rose-500"
  }
]

export function Skills() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section id="skills" className="py-24 relative z-10 bg-black/20">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-purple-400">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((group, index) => (
            <motion.div
              key={group.category}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${group.color} text-white shadow-lg`}>
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100">{group.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Hexagon className="w-3 h-3 text-cyan-400" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
