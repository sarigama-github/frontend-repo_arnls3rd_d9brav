import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="relative py-24 bg-[#05030B]">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_top_left,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && <p className="text-fuchsia-400 text-sm font-semibold tracking-wider uppercase">{eyebrow}</p>}
          {title && <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">{title}</h2>}
          {description && <p className="mt-4 text-white/70 text-lg">{description}</p>}
        </motion.div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
