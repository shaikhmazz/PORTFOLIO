import { Navbar } from "@/components/Navbar"
import { ParticleBackground } from "@/components/ParticleBackground"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Experience } from "@/components/sections/Experience"
import { Github } from "@/components/sections/Github"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-cyan-500/30">
      <ParticleBackground />
      <Navbar />
      
      <div className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Github />
        <Contact />
      </div>

      <Footer />
    </main>
  )
}
