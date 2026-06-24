"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { GitBranch, GitCommit, GitPullRequest } from "lucide-react"
import { FaGithub as GitIcon } from "react-icons/fa"

export function Github() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section id="github" className="py-24 relative z-10">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Open <span className="text-emerald-400">Source</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 glass-card p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <GitIcon className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">shaikhmazz</h3>
            <p className="text-slate-400 mb-8">Building and learning in public.</p>
            
            <div className="w-full grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <span className="block text-2xl font-bold text-white mb-1">500+</span>
                <span className="text-xs text-slate-400 flex items-center justify-center gap-1"><GitCommit className="w-3 h-3"/> Commits</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white mb-1">15</span>
                <span className="text-xs text-slate-400 flex items-center justify-center gap-1"><GitBranch className="w-3 h-3"/> Repos</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white mb-1">20</span>
                <span className="text-xs text-slate-400 flex items-center justify-center gap-1"><GitPullRequest className="w-3 h-3"/> PRs</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 glass-card p-8 flex flex-col items-center justify-center overflow-hidden"
          >
            <h3 className="text-xl font-bold text-white mb-6 self-start w-full border-b border-white/10 pb-4">Contribution Graph (Live)</h3>
            <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
              {/* GitHub Readme Stats Image as a reliable fallback for a dynamic graph */}
              <img 
                src="https://ghchart.rshah.org/shaikhmazz" 
                alt="Shaikh Mazein Ahmed's Github Chart" 
                className="w-full min-w-[600px] opacity-80 hue-rotate-[160deg] saturate-200"
              />
            </div>
            
            <div className="w-full grid md:grid-cols-2 gap-6 mt-8 border-t border-white/10 pt-6">
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=shaikhmazz&layout=compact&theme=vision-friendly-dark&hide_border=true&bg_color=00000000" alt="Top Languages" className="w-full" />
              <img src="https://github-readme-stats.vercel.app/api?username=shaikhmazz&show_icons=true&theme=vision-friendly-dark&hide_border=true&bg_color=00000000" alt="Github Stats" className="w-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
