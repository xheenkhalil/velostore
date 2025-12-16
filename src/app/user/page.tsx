'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, Heart, Settings, Wallet, LogOut, ChevronRight, MapPin, CreditCard } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { MOCK_PRODUCTS } from '@/lib/mockData'
import Image from 'next/image'
import Link from 'next/link'

export default function UserPage() {
  const [activeTab, setActiveTab] = useState('orders')
  const wishlistItems = useCartStore(s => s.wishlist)
  // Derive wishlist products
  const wishlistProducts = MOCK_PRODUCTS.filter(p => wishlistItems.some(item => item.id === p._id))

  const menuItems = [
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop" alt="User" fill className="object-cover" />
                </div>
                <h2 className="font-bold text-xl text-gray-900">Alex Morgan</h2>
                <p className="text-gray-500 text-sm">Design Enthusiast</p>
                <div className="mt-4 px-3 py-1 bg-black text-white text-xs font-bold rounded-full">VELO MEMBER</div>
            </div>

            <nav className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
                {menuItems.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.id
                    return (
                        <button 
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all mb-1 text-sm font-bold ${isActive ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
                        >
                            <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : ''}`} />
                            {item.label}
                        </button>
                    )
                })}
                <div className="h-px bg-gray-100 my-2" />
                <button className="w-full flex items-center gap-3 p-4 rounded-xl text-red-500 hover:bg-red-50 transition-all text-sm font-bold">
                    <LogOut className="w-5 h-5" />
                    Sign Out
                </button>
            </nav>
        </div>

        {/* Content Area */}
        <div className="md:col-span-3">
             <AnimatePresence mode="wait">
                 
                 {/* ORDERS TAB */}
                 {activeTab === 'orders' && (
                     <motion.div 
                        key="orders"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                     >
                         <h2 className="text-2xl font-bold mb-4">Past Orders</h2>
                         
                         {/* Mock Order 1 */}
                         <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                             <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                                 <div>
                                     <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Order #VTR-88219</div>
                                     <div className="text-green-600 font-bold flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> Delivered today</div>
                                 </div>
                                 <Link href="/tracking/VTR-88219" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-bold transition-colors">
                                     Track Order
                                 </Link>
                             </div>
                             <div className="flex gap-4">
                                 <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden relative">
                                    <Image src={MOCK_PRODUCTS[0].mainImage} fill className="object-cover" alt="Product" />
                                 </div>
                                 <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden relative">
                                    <Image src={MOCK_PRODUCTS[1].mainImage} fill className="object-cover" alt="Product" />
                                 </div>
                                 <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 font-bold text-sm">
                                     +2
                                 </div>
                             </div>
                         </div>

                         {/* Mock Order 2 */}
                         <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 opacity-60 hover:opacity-100 transition-opacity">
                             <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                                 <div>
                                     <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Order #VTR-11920</div>
                                     <div className="text-gray-500 font-bold">Delivered Oct 24, 2024</div>
                                 </div>
                                 <button className="text-sm font-bold text-primary hover:underline">View Invoice</button>
                             </div>
                             <div className="flex gap-4">
                                 <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden relative">
                                    <Image src={MOCK_PRODUCTS[4].mainImage} fill className="object-cover" alt="Product" />
                                 </div>
                             </div>
                         </div>
                     </motion.div>
                 )}

                 {/* WISHLIST TAB */}
                 {activeTab === 'wishlist' && (
                    <motion.div 
                        key="wishlist"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <h2 className="text-2xl font-bold mb-6">Your Wishlist ({wishlistProducts.length})</h2>
                        {wishlistProducts.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                                <Heart className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                                <p className="text-gray-500">Your wishlist is empty.</p>
                                <Link href="/" className="text-primary font-bold hover:underline mt-2 inline-block">Explore Products</Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {wishlistProducts.map(product => (
                                    <Link key={product._id} href={`/product/${product.slug.current}`} className="bg-white p-4 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
                                        <div className="aspect-square relative mb-4 bg-gray-50 rounded-xl overflow-hidden">
                                            <Image src={product.mainImage} fill className="object-cover group-hover:scale-105 transition-transform" alt={product.title} />
                                        </div>
                                        <h3 className="font-bold text-gray-900 truncate">{product.title}</h3>
                                        <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                                        <p className="text-primary font-bold">${product.price}</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </motion.div>
                 )}

                 {/* WALLET TAB */}
                 {activeTab === 'wallet' && (
                    <motion.div 
                        key="wallet"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                             <div className="relative z-10">
                                 <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Total Balance</p>
                                 <h2 className="text-5xl font-bold tracking-tight mb-8">$1,250.00</h2>
                                 <div className="flex gap-4">
                                     <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">Top Up</button>
                                     <button className="bg-white/10 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white/20 transition-colors">Send</button>
                                 </div>
                             </div>
                             {/* Decor */}
                             <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-gray-100">
                             <h3 className="font-bold text-lg mb-6 flex items-center gap-2"><CreditCard className="w-5 h-5"/> Saved Cards</h3>
                             <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50">
                                 <div className="flex items-center gap-4">
                                     <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-white text-[10px] font-bold">VISA</div>
                                     <div>
                                         <p className="font-bold text-sm">•••• 4242</p>
                                         <p className="text-xs text-gray-500">Expires 12/28</p>
                                     </div>
                                 </div>
                                 <button className="text-xs font-bold text-red-500 hover:underline">Remove</button>
                             </div>
                        </div>
                    </motion.div>
                 )}

                 {/* SETTINGS (Placeholder) */}
                 {activeTab === 'settings' && (
                     <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center py-20">
                         <Settings className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                         <h3 className="font-bold text-gray-900">Account Settings</h3>
                         <p className="text-gray-500">Manage your preferences and security.</p>
                     </div>
                 )}

             </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
