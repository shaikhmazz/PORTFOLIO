"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Send, MapPin, Mail, Phone } from "lucide-react"

export function Contact() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const mainControls = useAnimation()
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", message: "" })
      alert("Message sent successfully!")
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 relative z-10 bg-black/20">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in <span className="text-cyan-400">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's build something together.</h3>
            <p className="text-slate-400 mb-8">
              I'm currently open for new opportunities in DevOps, Cloud Engineering, and Site Reliability. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm text-slate-400 font-medium">Email</span>
                  <a href="mailto:shaikhmazz125@gmail.com" className="text-slate-200 hover:text-cyan-400 transition-colors">shaikhmazz125@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm text-slate-400 font-medium">Location</span>
                  <span className="text-slate-200">Hyderabad, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3 glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-slate-600 resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
