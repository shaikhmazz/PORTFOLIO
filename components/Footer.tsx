"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-black/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold tracking-widest text-slate-100">
              MAZEIN<span className="text-cyan-400">.</span>
            </Link>
            <p className="text-sm text-slate-400 mt-2">
              Building scalable infrastructure & intelligent pipelines.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://github.com/shaikhmazz" target="_blank" className="p-2 rounded-full glass hover:bg-white/10 transition-colors">
              <FaGithub className="w-4 h-4 text-slate-300" />
            </Link>
            <Link href="https://linkedin.com/in/shaikh-mazein-ahmed-66773628b" target="_blank" className="p-2 rounded-full glass hover:bg-white/10 transition-colors">
              <FaLinkedin className="w-4 h-4 text-slate-300" />
            </Link>
            <Link href="mailto:shaikhmazz125@gmail.com" className="p-2 rounded-full glass hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4 text-slate-300" />
            </Link>
          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Shaikh Mazein Ahmed. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            Back to Top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
