import { motion } from 'framer-motion'
import { TrendingUp, AlertCircle, Zap, Target } from 'lucide-react'

export default function DemoOutput() {
  const results = [
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      value: 'High Potential',
      color: 'from-accent-blue',
      description: 'Strong market demand with growing adoption'
    },
    {
      icon: Target,
      title: 'Revenue Strategy',
      value: '$2.5M+',
      color: 'from-accent-purple',
      description: 'Projected year 3 ARR with freemium model'
    },
    {
      icon: AlertCircle,
      title: 'Risk Analysis',
      value: 'Moderate',
      color: 'from-accent-cyan',
      description: 'Main risks: competition & customer acquisition'
    },
    {
      icon: Zap,
      title: 'Growth Plan',
      value: '150% YoY',
      color: 'from-accent-purple',
      description: 'Achievable with proper execution and funding'
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
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">AI-Powered Analysis</h2>
          <p className="text-text-secondary text-lg">See what StartupMentor AI can do for you</p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {results.map((result, index) => {
            const Icon = result.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group relative overflow-hidden"
              >
                {/* Glow background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${result.color} to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${result.color} to-transparent opacity-20 flex items-center justify-center`}>
                      <Icon size={24} className="text-accent-blue" />
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm mb-2">{result.title}</p>
                  <h3 className="text-3xl font-bold gradient-text mb-3">{result.value}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{result.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-6 text-lg">This is just a preview of what you'll get</p>
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Full Analysis
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
