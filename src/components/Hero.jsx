import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#05030B]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.22)_0%,rgba(5,3,11,0.6)_50%,rgba(5,3,11,1)_100%)]" />

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-sky-300">
            <Zap className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wide">Lightning-fast AI ads</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            Premium performance, electric polish
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400">by j10effect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
          >
            We build autonomous ad systems that design, iterate, and optimize themselves — delivering 10x creative velocity and measurable lift.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 text-white font-medium shadow-[0_10px_30px_-10px_rgba(56,189,248,0.45)] hover:shadow-[0_10px_35px_-8px_rgba(56,189,248,0.6)] transition">
              Start a project
            </a>
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-medium border border-white/10 hover:bg-white/15 transition">
              See our work
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#05030B] to-transparent pointer-events-none" />
    </section>
  )
}
