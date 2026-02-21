import { motion } from "framer-motion"

export default function LoadingSkeleton() {
  return (
    <motion.div className="mt-6 space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="space-y-3 p-5 bg-brand-lightCard dark:bg-brand-darkCard rounded-3xl border border-gray-200 dark:border-[#3A3C44]">
        <div className="h-6 bg-gray-200 dark:bg-[#4A4C54] rounded-md w-3/4 animate-pulse" />
        <div className="h-4 bg-gray-200 dark:bg-[#4A4C54] rounded-md w-1/2 animate-pulse" />
        <div className="h-4 bg-gray-200 dark:bg-[#4A4C54] rounded-md w-2/3 animate-pulse" />

        <div className="pt-3 border-t border-gray-200 dark:border-[#3A3C44]">
          <div className="h-4 bg-gray-200 dark:bg-[#4A4C54] rounded-md w-full animate-pulse mt-2" />
          <div className="h-4 bg-gray-200 dark:bg-[#4A4C54] rounded-md w-full animate-pulse mt-2" />
          <div className="h-4 bg-gray-200 dark:bg-[#4A4C54] rounded-md w-full animate-pulse mt-2" />
        </div>

        <div className="pt-3 border-t border-gray-200 dark:border-[#3A3C44] grid grid-cols-2 gap-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-4 bg-gray-200 dark:bg-[#4A4C54] rounded-md w-full animate-pulse mt-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}