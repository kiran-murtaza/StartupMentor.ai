import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Enter Your Idea',
      description: 'Describe your startup concept and business vision'
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our AI analyzes market potential and feasibility'
    },
    {
      number: '03',
      title: 'Get Your Roadmap',
      description: 'Receive comprehensive strategies and launch plans'
    }
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 px-4" id="how-it-works">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-text-secondary text-lg">Simple three-step process to launch your startup</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
              <motion.div className="card group relative z-10">
                <motion.div
                  className="text-6xl font-bold gradient-text mb-6 opacity-50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </motion.div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-6 z-0">
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-accent-blue"
                  >
                    <ArrowDown size={24} className="rotate-90" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Timeline visualization */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="hidden lg:block h-1 bg-gradient-to-r from-accent-blue to-accent-purple mt-12 rounded-full origin-left"
        />
      </motion.div>
    </section>
  )
}
