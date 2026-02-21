import { motion } from "framer-motion"
import { Youtube, Github } from "lucide-react"
import ThemeToggle from "../ui/theme-toggle"

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 
                 bg-brand-lightCard/80 text-gray-900 border-b border-gray-200 
                 backdrop-blur-md z-50 
                 dark:bg-brand-dark/80 dark:text-white dark:border-[#3A3C44]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-lg font-semibold flex items-center glow-element"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <Youtube className="text-red-500 mr-2" />
        <span className="text-gray-900 dark:text-white">
          YouTube Chrono
        </span>
      </motion.div>

      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <motion.a
          href="https://github.com/pulkitgarg04/youtube-chrono"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full transition-colors duration-200 glow-element
                     hover:bg-gray-100 dark:hover:bg-[#3A3C44] text-gray-600 dark:text-gray-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Github size={20} />
        </motion.a>
      </div>
    </motion.nav>
  )
}
