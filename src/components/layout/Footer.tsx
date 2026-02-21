import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="hidden md:flex fixed bottom-0 left-0 w-full h-16 
             bg-brand-lightCard/80 dark:bg-brand-dark/80 
             backdrop-blur-md 
             text-gray-500 dark:text-gray-400 
             border-t border-gray-200 dark:border-[#3A3C44] 
             items-center justify-center"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-center text-sm font-medium">
        © {new Date().getFullYear()} YouTube Chrono. All Rights Reserved.
        <br className="hidden md:block" />
        <span className="text-gray-900 dark:text-white">
          Made with ❤️ by Pulkit Garg
        </span>
      </p>
    </motion.footer>
  )
}