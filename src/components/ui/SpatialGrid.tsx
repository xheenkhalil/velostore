'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ProductCard } from './ProductCard'

export function SpatialGrid({ products }: { products: any[] }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Staggered parallax effects for columns
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -200]) // Moves faster/more
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Split products into 3 columns
  const col1 = products.filter((_, i) => i % 3 === 0)
  const col2 = products.filter((_, i) => i % 3 === 1)
  const col3 = products.filter((_, i) => i % 3 === 2)

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full px-4 md:px-12">
      <motion.div style={{ y: y1 }} className="space-y-12 md:space-y-24 pt-0">
        {col1.map((p, i) => <ProductCard key={p._id} product={p} index={i} />)}
      </motion.div>
      
      <motion.div style={{ y: y2 }} className="space-y-12 md:space-y-24 pt-12 md:pt-32">
        {col2.map((p, i) => <ProductCard key={p._id} product={p} index={i} />)}
      </motion.div>
      
      <motion.div style={{ y: y3 }} className="space-y-12 md:space-y-24 pt-6 md:pt-16">
        {col3.map((p, i) => <ProductCard key={p._id} product={p} index={i} />)}
      </motion.div>
    </div>
  )
}
