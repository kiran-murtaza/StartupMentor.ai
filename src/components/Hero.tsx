import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function Hero() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 + index * 0.1 }
    })
  }

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Your AI Powered<span className="gradient-text"> Startup Coach</span>
          </motion.h1>
          <motion.p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Validate your startup ideas, build winning strategies, and launch successful businesses with advanced AI guidance and personalized coaching.
          </motion.p>
          <motion.div className="flex gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <motion.button className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Try Demo</motion.button>
            <motion.button className="btn-secondary flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Play size={18} />Watch Demo</motion.button>
          </motion.div>
        </motion.div>
        <motion.div className="relative" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.div variants={floatVariants} animate="float">
            <div className="space-y-4">
              {[{ title: 'Startup Idea', value: '85/100' }, { title: 'Market Analysis', value: 'High Potential' }, { title: 'Strategy Score', value: '92/100' }, { title: 'Launch Readiness', value: '78%' }].map((item, index) => (
                <motion.div key={item.title} custom={index} variants={cardVariants} initial="hidden" animate="visible" className="card-interactive">
                  <div className="flex justify-between items-center">
                    <div><p className="text-text-secondary text-sm">{item.title}</p><p className="text-2xl font-bold mt-1 gradient-text">{item.value}</p></div>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">✨</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
