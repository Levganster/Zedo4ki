import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ANIMATION_COLORS = [
  "#ffffff", // белый
  "#0039a6", // синий
  "#d52b1e", // красный
];

export default function AnimatedTitle() {
  const [numberOfZs, setNumberOfZs] = useState(1);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const sequence = [1, 2, 3, 4, 3, 2];
    let currentIndex = 0;
    let isFirstCycle = true;

    const nextStep = () => {
      setNumberOfZs(sequence[currentIndex]);
      const currentValue = sequence[currentIndex];
      currentIndex = (currentIndex + 1) % sequence.length;

      if (currentIndex === 0) {
        isFirstCycle = false;
      }

      const shouldPause =
        currentValue === 4 || (currentValue === 1 && !isFirstCycle);
      let delay = 300;
      if (shouldPause) {
        delay = currentValue === 1 ? 7000 : 5000;
      }

      // Цветовая анимация зависит от количества букв (numberOfZs > 1)

      setTimeout(nextStep, delay);
    };

    const timeout = setTimeout(nextStep, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative text-4xl md:text-7xl font-bold text-white flex font-unbounded">
      <div className="absolute inset-0 text-4xl md:text-7xl font-bold flex font-unbounded text-cyan-400/20 blur-sm pointer-events-none">
        Zedo4ka
      </div>

      <div className="absolute -left-3 -top-3 w-4 h-4 border-t border-l border-cyan-400/30" />
      <div className="absolute -right-3 -top-3 w-4 h-4 border-t border-r border-cyan-400/30" />
      <div className="absolute -left-3 -bottom-3 w-4 h-4 border-b border-l border-cyan-400/30" />
      <div className="absolute -right-3 -bottom-3 w-4 h-4 border-b border-r border-cyan-400/30" />

      <div className="absolute -top-1 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full" />
      <div className="absolute -top-1 right-1/4 w-1 h-1 bg-cyan-400/40 rounded-full" />
      <div className="absolute -bottom-1 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full" />
      <div className="absolute -bottom-1 right-1/4 w-1 h-1 bg-cyan-400/40 rounded-full" />

      <div
        className="relative z-10 flex"
        style={{ textShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
      >
        {Array.from({ length: numberOfZs }, (_, index) => (
          <motion.span
            key={`z-${index}`}
            initial={{ opacity: 0, x: -10, scale: 0.8 }}
            animate={
              numberOfZs > 1
                ? {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    color: [
                      ANIMATION_COLORS[0], // белый
                      ANIMATION_COLORS[1], // синий
                      ANIMATION_COLORS[2], // красный
                      ANIMATION_COLORS[0], // обратно к белому
                    ],
                    transition: {
                      opacity: { duration: 0.3, ease: "easeOut" },
                      x: { duration: 0.3, ease: "easeOut" },
                      scale: { duration: 0.3, ease: "easeOut" },
                      color: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay:
                          index * 0.15 -
                          (((Date.now() - startTime) / 1000) % 1.5),
                      },
                    },
                  }
                : {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    color: "#ffffff",
                    transition: {
                      opacity: { duration: 0.3, ease: "easeOut" },
                      x: { duration: 0.3, ease: "easeOut" },
                      scale: { duration: 0.3, ease: "easeOut" },
                    },
                  }
            }
            exit={{
              opacity: 0,
              x: 10,
              scale: 0.8,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            }}
            className="inline-block relative"
            layout
            transition={{
              layout: {
                type: "spring" as const,
                damping: 20,
                stiffness: 400,
                duration: 0.3,
              },
            }}
          >
            Z
            <motion.div
              className="absolute inset-0 blur-lg pointer-events-none"
              animate={
                numberOfZs > 1
                  ? {
                      color: [
                        ANIMATION_COLORS[0], // белый
                        ANIMATION_COLORS[1], // синий
                        ANIMATION_COLORS[2], // красный
                        ANIMATION_COLORS[0], // обратно к белому
                      ],
                      opacity: [0.2, 0.4, 0.2],
                      transition: {
                        color: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay:
                            index * 0.15 -
                            (((Date.now() - startTime) / 1000) % 1.5),
                        },
                        opacity: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay:
                            index * 0.15 -
                            (((Date.now() - startTime) / 1000) % 1.5),
                        },
                      },
                    }
                  : {
                      color: "#ffffff",
                      opacity: 0.3,
                    }
              }
            >
              Z
            </motion.div>
            <div className="absolute inset-0 text-white/10 blur-md pointer-events-none">
              Z
            </div>
          </motion.span>
        ))}

        {["e", "d", "o", "4", "k", "a"].map((char, index) => (
          <motion.span
            key={`static-end-${char}-${index}`}
            className="inline-block relative"
            layout
            transition={{
              layout: {
                type: "spring" as const,
                damping: 20,
                stiffness: 400,
                duration: 0.3,
              },
            }}
          >
            {char}
            <div className="absolute inset-0 text-cyan-400/10 blur-md pointer-events-none">
              {char}
            </div>
          </motion.span>
        ))}
      </div>
    </div>
  );
}
