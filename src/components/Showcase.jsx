import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Zap } from 'lucide-react'

const projects = [
  {
    name: 'Adaptive Video Engine',
    desc: 'AI renders variants in real-time based on audience micro-signals.',
    img: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Creative Search Copilot',
    desc: 'Semantic search across your library to assemble winning concepts instantly.',
    img: 'https://images.unsplash.com/photo-1547955922-48ec937f15db?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Autonomous Media Mix',
    desc: 'Predictive allocation that shifts budget across channels for max ROI.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Realtime Creative Orchestrator',
    desc: 'Dynamic assembly of scenes and copy components on the fly.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Audience Signal Graph',
    desc: 'Graph embeddings drive segment-specific creative decisions.',
    img: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Auto-Iterate Studio',
    desc: 'Closed-loop creative generation, testing and rollout.',
    img: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop'
  }
]

function Card({ p, i }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useMotionTemplate`${my}deg`
  const rotateY = useMotionTemplate`${mx}deg`

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = (x / rect.width) * 2 - 1 // -1 to 1
    const py = (y / rect.height) * 2 - 1
    mx.set(px * 4)
    my.set(-py * 4)
  }

  const handleMouseLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.04, duration: 0.5 }}
      style={{ rotateX, rotateY }}
      className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 overflow-hidden will-change-transform"
    >
      {/* Moving blue glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-1 rounded-2xl"
        initial={{ opacity: 0.4, x: -40, y: -20 }}
        animate={{
          x: [ -40, 40, 0, -40 ],
          y: [ -20, 30, -10, -20 ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(120px 80px at 30% 20%, rgba(56,189,248,0.35), transparent 60%), radial-gradient(140px 100px at 70% 60%, rgba(37,99,235,0.35), transparent 60%)'
        }}
      />

      {/* Inner content overlay to keep text crisp */}
      <div className="relative">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-sky-500 to-blue-600 grid place-items-center ring-1 ring-white/20 shadow-[0_0_20px_rgba(56,189,248,0.45)]">
            <Zap className="h-3.5 w-3.5 text-white" />
          </div>
          <h3 className="text-white font-semibold text-lg">{p.name}</h3>
        </div>
        <p className="text-white/70 mt-2 text-sm">{p.desc}</p>

        {/* Image banner */}
        <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/30">
          <motion.img
            src={p.img}
            alt={p.name}
            className="h-44 w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          />
        </div>

        {/* Action row */}
        <div className="mt-5 flex items-center justify-between text-xs text-white/60">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
            Live prototype
          </span>
          <a href="#" className="text-sky-300 hover:text-sky-200 transition">View details →</a>
        </div>
      </div>

      {/* Hover ring glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-sky-400/40 transition" />
    </motion.div>
  )
}

export default function Showcase() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <Card key={p.name} p={p} i={i} />)
      )}
    </div>
  )
}
