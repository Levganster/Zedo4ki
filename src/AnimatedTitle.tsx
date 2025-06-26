import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const ANIMATION_COLORS = [
  "#00d4ff", "#0099ff", "#0066ff", "#3300ff", 
  "#6600ff", "#9900ff", "#ff00ff", "#00d4ff"
]

export default function AnimatedTitle() {
  const [numberOfFours, setNumberOfFours] = useState(1)
  const [isOnPause, setIsOnPause] = useState(false)
  
  useEffect(() => {
    const sequence = [1, 2, 3, 4, 3, 2]
    let currentIndex = 0
    let isFirstCycle = true
    
    const nextStep = () => {
      setNumberOfFours(sequence[currentIndex])
      const currentValue = sequence[currentIndex]
      currentIndex = (currentIndex + 1) % sequence.length
      
      if (currentIndex === 0) {
        isFirstCycle = false
      }
      
      const shouldPause = currentValue === 4 || (currentValue === 1 && !isFirstCycle)
      let delay = 75
      if (shouldPause) {
        delay = currentValue === 1 ? 7000 : 3000
      }
      
      setIsOnPause(currentValue === 4 && shouldPause)
      
      setTimeout(nextStep, delay)
    }
    
    const timeout = setTimeout(nextStep, 75)
    
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='text-4xl md:text-7xl font-bold text-white flex font-unbounded'>
      {["G", "R", "I", "B", "O"].map((char, index) => (
        <motion.span
          key={`static-${char}-${index}`}
          className="inline-block"
          layout
          transition={{
            layout: {
              type: "spring" as const,
              damping: 20,
              stiffness: 400,
              duration: 0.3
            }
          }}
        >
          {char}
        </motion.span>
      ))}
      
      {Array.from({ length: numberOfFours }, (_, index) => (
        <motion.span
          key={`four-${index}`}
          initial={{ opacity: 0, x: -10, scale: 0.8 }}
          animate={isOnPause ? {
            opacity: 1, 
            x: 0,
            scale: 1,
            color: ANIMATION_COLORS,
            transition: {
              color: {
                duration: 0.65,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1
              }
            }
          } : { 
            opacity: 1, 
            x: 0,
            scale: 1,
            color: "#ffffff",
            transition: {
              type: "spring" as const,
              damping: 15,
              stiffness: 300,
              duration: 0.1
            }
          }}
          exit={{ 
            opacity: 0, 
            x: 10, 
            scale: 0.8,
            transition: {
              duration: 0.05
            }
          }}
          className="inline-block"
          layout
          transition={{
            layout: {
              type: "spring" as const,
              damping: 20,
              stiffness: 400,
              duration: 0.3
            }
          }}
        >
          4
        </motion.span>
      ))}
      
      {["K", "I"].map((char, index) => (
        <motion.span
          key={`static-end-${char}-${index}`}
          className="inline-block"
          layout
          transition={{
            layout: {
              type: "spring" as const,
              damping: 20,
              stiffness: 400,
              duration: 0.3
            }
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
} 