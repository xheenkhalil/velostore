'use client'

import { motion, useScroll, useTransform, useSpring, useVelocity, useMotionValue, useAnimationFrame } from 'framer-motion'
import { useRef } from 'react'

interface VelocityScrollProps {
  children: React.ReactNode
}

export function VelocityScroll({ children }: VelocityScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })

  // Skew based on velocity (max 10 degrees)
  const skew = useTransform(smoothVelocity, [-1000, 1000], [-5, 5])
  
  // Parallax Y offset
  const y = useTransform(scrollY, [0, 1000], [0, -50])

  return (
    <div ref={containerRef} className="perspective-1000">
      <motion.div
        style={{ 
          skewY: skew,
          y
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
