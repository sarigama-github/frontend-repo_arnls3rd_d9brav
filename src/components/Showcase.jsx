import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Adaptive Video Engine',
    desc: 'AI renders variants in real-time based on audience micro-signals.',
  },
  {
    name: 'Creative Search Copilot',
    desc: 'Semantic search across your library to assemble winning concepts instantly.',
  },
  {
    name: 'Autonomous Media Mix',
    desc: 'Predictive allocation that shifts budget across channels for max ROI.',
  },
]

export default function Showcase() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          className="relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(400px_150px_at_top_right,rgba(168,85,247,0.6),transparent)]" />
          <h3 className="text-white font-semibold text-lg">{p.name}</h3>
          <p className="text-white/70 mt-2 text-sm">{p.desc}</p>
          <div className="mt-6 h-36 rounded-lg bg-black/40 border border-white/10" />
        </motion.div>
      ))}
    </div>
  )
}
