import { motion } from 'framer-motion'
import { Target, BarChart3, Megaphone, Rocket } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Target,
      title: 'Startup Idea Validation',
      description: 'Get instant AI feedback on your startup ideas and identify market opportunities'
    },
    {
      icon: BarChart3,
      title: 'Business Strategy Generator',
      description: 'Create comprehensive strategies tailored to your business model'
    },
    {
      icon: Megaphone,
      title: 'Marketing Coach',
      description: 'Develop powerful marketing plans with AI-driven insights'
    },
    {
      icon: Rocket,
      title: 'Launch Roadmap Generator',
      description: 'Get step-by-step guidance to launch your startup successfully'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 px-4" id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful AI Features</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Everything you need to validate, build, and launch your startup
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-interactive group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent-blue/30 transition-all">
                  <Icon size={28} className="text-accent-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
