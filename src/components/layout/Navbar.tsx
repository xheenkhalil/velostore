'use client'

import { motion } from 'framer-motion'
import { Home, ShoppingBag, Search, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { useCartStore } from '@/store/cart'

const items = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Search', href: '/search', icon: Search },
  { name: 'Cart', href: '#cart', icon: ShoppingBag, action: 'toggleCart' },
  { name: 'Profile', href: '/profile', icon: User },
]

export function Navbar() {
  const pathname = usePathname()
  const toggleCart = useCartStore((s) => s.toggleCart)

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        layoutId="navbar"
        className="flex items-center gap-2 p-2 rounded-full bg-secondary/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {items.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.action ? '#' : item.href}
              onClick={(e) => {
                if (item.action === 'toggleCart') {
                  e.preventDefault()
                  toggleCart()
                }
              }}
              className="relative flex items-center justify-center w-12 h-12 rounded-full transition-colors hover:bg-white/5"
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-primary/20 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon 
                className={clsx(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )} 
                strokeWidth={isActive ? 2.5 : 2}
              />
            </Link>
          )
        })}
      </motion.nav>
    </div>
  )
}
