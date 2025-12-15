'use client'

import { Search, ShoppingCart, User, Menu, Heart, X } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cart'
import { useState } from 'react'
import { SearchWithSuggestions } from '@/components/features/SearchWithSuggestions'

export function TopNavbar() {
  const { toggleCart, items } = useCartStore()
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-black shadow-lg border-b border-white/10 transition-all">
      {/* Top Bar */}
      <div className="container mx-auto px-6 h-20 flex items-center gap-4 md:gap-12">
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="text-3xl font-black tracking-tighter flex items-center gap-1 group">
          <span className="text-white group-hover:text-primary transition-colors">VELO</span>
          <span className="text-primary text-4xl leading-[0]">.</span>
        </Link>
        
        {/* Search Bar - Premium/Wide */}
        <SearchWithSuggestions />

        {/* Actions */}
        <div className="flex items-center gap-6 ml-auto text-white">
          <Link href="/user" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
             <User className="w-5 h-5" />
             <span className="hidden sm:inline">Account</span>
          </Link>
          
          <Link href="/user" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
             <Heart className="w-5 h-5" />
             <span className="hidden sm:inline">Saved</span>
          </Link>

          <Link href="/cart" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors relative group">
             <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-primary text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
                  >
                    {itemCount}
                  </motion.span>
                )}
             </div>
             <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 z-50 md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-black border-r border-white/10 z-50 p-6 flex flex-col gap-6"
            >
               <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-white">VELO.</span>
                  <button onClick={() => setIsMenuOpen(false)} className="text-white">
                    <X className="w-6 h-6" />
                  </button>
               </div>
               <nav className="flex flex-col gap-4 text-white">
                  <Link href="#" className="py-2 border-b border-white/10 hover:text-primary">All Categories</Link>
                  <Link href="#" className="py-2 border-b border-white/10 hover:text-primary">Official Store</Link>
                  <Link href="#" className="py-2 border-b border-white/10 hover:text-primary">Deals</Link>
               </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Categories Bar */}
      <div className="bg-white/5 border-t border-white/10 text-white text-sm font-medium backdrop-blur-sm">
         <div className="container mx-auto px-6 h-12 flex items-center gap-8 overflow-x-auto no-scrollbar">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 hover:text-primary whitespace-nowrap text-white"
            >
              <Menu className="w-4 h-4"/> All Categories
            </button>
            <Link href="#" className="hover:text-primary whitespace-nowrap transition-colors">Official Store</Link>
            <Link href="#" className="hover:text-primary whitespace-nowrap transition-colors">Flash Deals</Link>
            <Link href="#" className="hover:text-primary whitespace-nowrap transition-colors">Phones & Tablets</Link>
            <Link href="#" className="hover:text-primary whitespace-nowrap transition-colors">Electronics</Link>
            <Link href="#" className="hover:text-primary whitespace-nowrap transition-colors">Fashion</Link>
         </div>
      </div>
    </header>
  )
}

