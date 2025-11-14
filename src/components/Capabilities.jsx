import { motion } from 'framer-motion'
import { Brain, Rocket, GaugeCircle, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'Generative Creative',
    desc: 'On-brand assets generated on demand: copy, visuals, and variations aligned to your style.'
  },
  {
    icon: GaugeCircle,
    title: 'Autonomous Optimization',
    desc: 'Multi-armed bandits and Bayesian loops continuously seek higher-performing concepts.'
  },
  {
    icon: Rocket,
    title: 'Rapid Experimentation',
    desc: 'From idea to live test in minutes. Ship more learnings, more often.'
  },
  {
    icon: Sparkles,
    title: 'Personalized Delivery',
    desc: 'Dynamic creative adapts by segment, behavior, and context — at the edge.'
  }
]

export default function Capabilities() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map(({ icon: Icon, title, desc }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition group"
        >
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-600 to-indigo-600 grid place-items-center mb-4 ring-1 ring-white/20">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-white/70 mt-2 text-sm">{desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
