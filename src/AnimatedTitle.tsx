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
    <div className='relative text-4xl md:text-7xl font-bold text-white flex font-unbounded'>
      {/* Глоу эффект для заголовка */}
      <div className="absolute inset-0 text-4xl md:text-7xl font-bold flex font-unbounded text-cyan-400/20 blur-sm pointer-events-none">
        GRIBO4KI
      </div>
      
      {/* Чертежные элементы для заголовка */}
      <div className="absolute -left-3 -top-3 w-4 h-4 border-t border-l border-cyan-400/30" />
      <div className="absolute -right-3 -top-3 w-4 h-4 border-t border-r border-cyan-400/30" />
      <div className="absolute -left-3 -bottom-3 w-4 h-4 border-b border-l border-cyan-400/30" />
      <div className="absolute -right-3 -bottom-3 w-4 h-4 border-b border-r border-cyan-400/30" />
      
      {/* Размерные точки */}
      <div className="absolute -top-1 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full" />
      <div className="absolute -top-1 right-1/4 w-1 h-1 bg-cyan-400/40 rounded-full" />
      <div className="absolute -bottom-1 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full" />
      <div className="absolute -bottom-1 right-1/4 w-1 h-1 bg-cyan-400/40 rounded-full" />
      
      {/* Основной текст */}
      <div className="relative z-10 flex" style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}>
        {["G", "R", "I", "B", "O"].map((char, index) => (
          <motion.span
            key={`static-${char}-${index}`}
            className="inline-block relative"
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
            {/* Индивидуальный глоу для каждой буквы */}
            <div className="absolute inset-0 text-cyan-400/10 blur-md pointer-events-none">
              {char}
            </div>
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
              textShadow: [
                '0 0 20px rgba(34, 211, 238, 0.5)',
                '0 0 40px rgba(168, 85, 247, 0.5)',
                '0 0 60px rgba(59, 130, 246, 0.5)'
              ],
              transition: {
                color: {
                  duration: 0.65,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1
                },
                textShadow: {
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15
                }
              }
            } : { 
              opacity: 1, 
              x: 0,
              scale: 1,
              color: "#ffffff",
              textShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
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
            className="inline-block relative"
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
            {/* Специальный глоу для анимированных цифр */}
            <motion.div 
              className="absolute inset-0 blur-lg pointer-events-none"
              animate={isOnPause ? {
                color: ANIMATION_COLORS,
                opacity: [0.3, 0.6, 0.3],
                transition: {
                  color: {
                    duration: 0.65,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  },
                  opacity: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }
                }
              } : {
                color: "#22d3ee",
                opacity: 0.3
              }}
            >
              4
            </motion.div>
            
            {/* Дополнительный постоянный глоу для четверок */}
            <div className="absolute inset-0 text-cyan-400/10 blur-md pointer-events-none">
              4
            </div>
          </motion.span>
        ))}
        
        {["K", "I"].map((char, index) => (
          <motion.span
            key={`static-end-${char}-${index}`}
            className="inline-block relative"
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
            {/* Индивидуальный глоу для каждой буквы */}
            <div className="absolute inset-0 text-cyan-400/10 blur-md pointer-events-none">
              {char}
            </div>
          </motion.span>
        ))}
      </div>
    </div>
  )
} 