import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-card/50 backdrop-blur-md border-b border-dark-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent-blue/50 transition-all">
              <Sparkles size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">StartupMentor AI</span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {['Features', 'How It Works', 'Pricing'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-text-secondary hover:text-accent-blue transition-colors font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="btn-primary"
          >
            Sign In
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
