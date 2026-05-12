import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function StartupInput() {
  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Describe Your Startup Idea</h2>
          <p className="text-text-secondary text-lg">AI will analyze your business potential instantly</p>
        </motion.div>

        <motion.form
          onSubmit={handleAnalyze}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <textarea
            placeholder="I want to start a food delivery app for students in major cities..."
            className="input-field w-full h-32 resize-none"
          />

          <motion.button
            type="submit"
            className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap size={20} />
            Analyze Startup
          </motion.button>

          <p className="text-center text-text-secondary text-sm">
            ✨ AI will analyze your idea and generate business strategy instantly
          </p>
        </motion.form>
      </div>
    </section>
  )
}
