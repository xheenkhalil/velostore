'use client'

import { useCartStore } from "@/store/cart"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, CreditCard } from "lucide-react"

export default function CartPage() {
  const items = useCartStore(s => s.items)
  const removeItem = useCartStore(s => s.removeItem)
  const updateQuantity = useCartStore(s => s.updateQuantity)

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const shipping = subtotal > 500 ? 0 : 25
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax
  
  if (items.length === 0) {
      return (
          <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6 text-gray-400">
                  <Truck className="w-12 h-12" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
              <p className="text-gray-500 mb-8 max-w-md text-center">Looks like you haven't added anything to your cart yet. Explore our premium collection.</p>
              <Link href="/" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors">
                  Start Shopping
              </Link>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart ({items.length})</h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Cart Items List */}
                <div className="lg:col-span-8 space-y-4">
                    <AnimatePresence>
                        {items.map((item) => (
                            <motion.div 
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-center"
                            >
                                <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        fill 
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                                        <button 
                                            onClick={() => removeItem(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors p-2"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">In Stock</p>
                                    
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-200">
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-white rounded-md transition-colors"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-white rounded-md transition-colors shadow-sm"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-lg">${item.price * item.quantity}</p>
                                            {item.quantity > 1 && (
                                                <p className="text-xs text-gray-400">${item.price} each</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-4 h-fit">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                        
                        <div className="space-y-4 mb-6 border-b border-gray-100 pb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-medium">${subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping estimate</span>
                                <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax estimate</span>
                                <span className="font-medium">${tax.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-end mb-8">
                            <span className="text-lg font-bold text-gray-900">Order Total</span>
                            <span className="text-2xl font-bold text-primary">${total.toLocaleString()}</span>
                        </div>

                        <Link 
                            href="/checkout"
                            className="block w-full bg-black text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg mb-6"
                        >
                            Checkout Now
                        </Link>

                        <div className="grid grid-cols-3 gap-2 text-center text-xs text-gray-400">
                            <div className="flex flex-col items-center gap-1">
                                <ShieldCheck className="w-5 h-5" />
                                <span>Secure</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <Truck className="w-5 h-5" />
                                <span>Fast Ship</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <CreditCard className="w-5 h-5" />
                                <span>Encrypted</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
