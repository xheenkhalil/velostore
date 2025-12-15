'use client'

import { motion, AnimatePresence, Reorder, useMotionValue } from 'framer-motion'
import { X, Trash2, Minus, Plus } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export function CartDrawer() {
  const { isOpen, toggleCart, items, removeItem } = useCartStore()
  // Local state for reordering to avoid zustand flicker during drag
  const [localItems, setLocalItems] = useState(items)

  useEffect(() => {
    setLocalItems(items)
  }, [items])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-secondary/90 backdrop-blur-xl border-l border-white/10 z-50 p-6 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button onClick={toggleCart} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {localItems.length === 0 ? (
               <div className="flex flex-col items-center justify-center h-[50vh] text-muted-foreground">
                 <p>Your cart is empty.</p>
                 <p className="text-sm mt-2">Start adding some items.</p>
               </div>
            ) : (
                <Reorder.Group axis="y" values={localItems} onReorder={setLocalItems} className="space-y-4">
                  {localItems.map((item) => (
                    <CartItem key={item.id} item={item} onRemove={removeItem} />
                  ))}
                </Reorder.Group>
            )}
            
            <div className="absolute bottom-8 left-6 right-6">
                <div className="flex justify-between text-xl font-bold mb-4">
                    <span>Total</span>
                    <span>${localItems.reduce((acc, i) => acc + (i.price * i.quantity), 0)}</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
                    Checkout
                </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function CartItem({ item, onRemove }: { item: any, onRemove: (id: string) => void }) {
    const x = useMotionValue(0)

    return (
        <Reorder.Item value={item} id={item.id} style={{ x }}>
            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                    if (info.offset.x > 100) {
                        onRemove(item.id)
                    }
                }}
                className="relative bg-background/50 p-4 rounded-2xl flex gap-4 overflow-hidden border border-white/5 cursor-grab active:cursor-grabbing"
            >
                <div className="relative w-20 h-20 bg-secondary rounded-xl overflow-hidden shrink-0">
                    <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">${item.price}</p>
                    <div className="flex items-center gap-2">
                        <span className="text-xs bg-white/10 px-2 py-1 rounded">Qty: {item.quantity}</span>
                    </div>
                </div>
                
                {/* Swipe hint */}
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-red-500/50 to-transparent opacity-0 transition-opacity" />
            </motion.div>
        </Reorder.Item>
    )
}
