'use client'

import { useCartStore } from "@/store/cart"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Trash2, ShoppingCart } from "lucide-react"

export default function WishlistPage() {
  const wishlist = useCartStore(s => s.wishlist)
  const toggleWishlist = useCartStore(s => s.toggleWishlist)
  const addItem = useCartStore(s => s.addItem)
  
  if (wishlist.length === 0) {
      return (
          <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
              <div className="w-24 h-24 bg-red-50 text-red-400 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-12 h-12 fill-current" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your wishlist is empty</h1>
              <p className="text-gray-500 mb-8 max-w-md text-center">Save items you love for later.</p>
              <Link href="/" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                  Explore Products
              </Link>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist ({wishlist.length})</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatePresence>
                    {wishlist.map((item) => (
                        <motion.div 
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-lg transition-shadow"
                        >
                            <div className="relative aspect-square w-full bg-gray-50 rounded-xl overflow-hidden mb-4">
                                <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <button 
                                    onClick={() => toggleWishlist(item)}
                                    className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur rounded-full text-red-500 hover:bg-red-50 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            <Link href={`/product/${item.slug}`} className="block">
                                <h3 className="font-bold text-gray-900 mb-1 truncate">{item.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">${item.price}</p>
                            </Link>
                            
                            <button 
                                onClick={() => addItem({ ...item, quantity: 1 })}
                                className="w-full bg-black text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                            >
                                <ShoppingCart className="w-4 h-4" /> Add to Cart
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    </div>
  )
}

function Heart({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    )
}
