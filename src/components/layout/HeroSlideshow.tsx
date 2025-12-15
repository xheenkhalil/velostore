'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const SLIDES = [
  {
    id: 1,
    title: "Up to 60% Off",
    subtitle: "Nike & Adidas",
    bg: "bg-black",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop",
    tag: "VELO FIESTA"
  },
  {
    id: 2,
    title: "New Season",
    subtitle: "Streetwear Collection",
    bg: "bg-[#1a1a1a]",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop",
    tag: "FRESH DROPS"
  },
  {
    id: 3,
    title: "Tech Runner",
    subtitle: "Future Performance",
    bg: "bg-[#0f172a]",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
    tag: "PRO SERIES"
  }
]

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length)
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)

  return (
    <div className="md:col-span-8 bg-black rounded-2xl relative overflow-hidden h-[400px] md:h-full group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 flex items-center px-12 ${SLIDES[current].bg}`}
        >
          {/* Content */}
          <div className="relative z-10 text-white max-w-lg space-y-4">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-primary px-3 py-1 rounded text-xs font-bold tracking-wider uppercase text-black"
            >
              {SLIDES[current].tag}
            </motion.span>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-black leading-tight"
            >
              {SLIDES[current].title} <br/>
              <span className="text-gray-400">{SLIDES[current].subtitle}</span>
            </motion.h1>
            <motion.button 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105 active:scale-95"
            >
              Shop Now
            </motion.button>
          </div>

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-0" />

          {/* Image */}
          <motion.img 
            initial={{ scale: 1.1, opacity: 0, x: 50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src={SLIDES[current].image} 
            className="absolute right-[-10%] top-1/2 -translate-y-1/2 h-[120%] object-contain opacity-100" 
            alt="Hero" 
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur transition-all opacity-0 group-hover:opacity-100 z-20">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur transition-all opacity-0 group-hover:opacity-100 z-20">
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-12 flex gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${current === i ? 'bg-primary w-6' : 'bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
    </div>
  )
}
