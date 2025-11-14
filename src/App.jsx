import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Capabilities from './components/Capabilities'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#05030B]">
      <Navbar />
      <main>
        <Hero />

        <Section
          id="about"
          eyebrow="About"
          title="We turn AI into unfair advantage"
          description="j10effect is an AI-native ad studio. We design autonomous systems that invent, test, and learn at lightspeed — amplifying your brand while driving measurable revenue."
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold">Principle {i}</h3>
                <p className="text-white/70 text-sm mt-2">Ship fast, measure truth, automate wins.</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="capabilities"
          eyebrow="Capabilities"
          title="From concept to compounding lift"
          description="A tightly integrated stack across creative generation, experimentation, and optimization."
        >
          <Capabilities />
        </Section>

        <Section id="work" eyebrow="Work" title="Selected builds">
          <Showcase />
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s talk">
          <Contact />
        </Section>
      </main>

      <footer className="border-t border-white/10 bg-[#05030B] py-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white/60 text-sm">
          <p>© {new Date().getFullYear()} j10effect. All rights reserved.</p>
          <p>Built with electric precision.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
