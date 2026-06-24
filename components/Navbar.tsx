"use client"

import * as React from "react"
import Link from "next/link"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-widest text-slate-100">
          MAZEIN<span className="text-cyan-400">.</span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
          <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link href="#skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
          <Link href="#experience" className="hover:text-cyan-400 transition-colors">Experience</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="https://github.com/shaikhmazz" target="_blank" className="text-slate-400 hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com/in/shaikh-mazein-ahmed-66773628b" target="_blank" className="text-slate-400 hover:text-white transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link href="#contact" className="px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors text-sm font-medium hidden md:block">
            Let's Talk
          </Link>
        </div>
      </div>
    </header>
  )
}
