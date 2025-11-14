import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('Sent! We will reach out shortly.')
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-xl border border-white/10 bg-white/5 p-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-sky-300">
          <Zap className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wide">Start the spark</span>
        </div>
        <h3 className="text-white text-xl font-semibold mt-3">Let’s build something unreal</h3>
        <p className="text-white/70 text-sm mt-2">Tell us about your goals and timelines.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input required placeholder="Name" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          <input required placeholder="Company" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          <input required type="email" placeholder="Email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          <textarea required placeholder="What do you want to create?" rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 text-white font-medium shadow-[0_10px_30px_-10px_rgba(56,189,248,0.45)] hover:shadow-[0_10px_35px_-8px_rgba(56,189,248,0.6)] transition">
            {status || 'Send message'}
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent p-6"
      >
        <h3 className="text-white text-xl font-semibold">What you get</h3>
        <ul className="mt-3 space-y-2 text-white/70 text-sm">
          <li>• Strategy sprint to define hypotheses</li>
          <li>• Creative system tuned to your brand voice</li>
          <li>• Weekly experiment reviews with insights</li>
          <li>• Clear targets and transparent performance</li>
        </ul>
      </motion.div>
    </div>
  )
}
