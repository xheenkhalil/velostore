'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ShieldCheck, CreditCard, ChevronRight, Loader2, MapPin, Truck } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const [step, setStep] = useState(1) // 1: Address, 2: Payment, 3: Processing, 4: Success
  const [loadingStep, setLoadingStep] = useState(0) // For processing messages
  const router = useRouter()
  const clearCart = useCartStore(s => s.items.length = 0) // Need to implement clear in store properly or just empty array? 
  // Store update: we should probably add a clearCart method, but for now we can just redirect or simulate.
  
  // processing simulation
  useEffect(() => {
    if (step === 3) {
      const timers = [
        setTimeout(() => setLoadingStep(1), 1000), // "Verifying Card"
        setTimeout(() => setLoadingStep(2), 2500), // "Checking Stock"
        setTimeout(() => setLoadingStep(3), 4000), // "Confirming Order"
        setTimeout(() => setStep(4), 5500),        // Success
      ]
      return () => timers.forEach(clearTimeout)
    }
  }, [step])

  // auto-redirect after success
  useEffect(() => {
    if (step === 4) {
        // Generate random order ID
        const orderId = 'VTR' + Math.floor(100000 + Math.random() * 900000)
        setTimeout(() => {
            router.push(`/tracking/${orderId}`)
        }, 3000)
    }
  }, [step, router])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden relative min-h-[600px] flex flex-col">
        
        {/* Header Progress */}
        <div className="flex justify-between px-8 py-6 border-b border-gray-100 bg-white/50 backdrop-blur z-10 sticky top-0">
            {[1, 2, 3].map((s) => (
                <div key={s} className="flex flex-col items-center gap-1 relative z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${step >= s ? 'bg-black text-white scale-110' : 'bg-gray-100 text-gray-400'}`}>
                        {step > s ? <Check className="w-4 h-4" /> : s}
                    </div>
                </div>
            ))}
            {/* Progress Bar background could go here */}
        </div>

        <div className="flex-1 relative p-8">
            <AnimatePresence mode="wait">
                
                {/* STEP 1: ADDRESS */}
                {step === 1 && (
                    <motion.div 
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900"><MapPin className="text-primary"/> Shipping Details</h2>
                        <div className="space-y-4">
                            <input className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-black placeholder:text-gray-400" placeholder="Full Name" />
                            <input className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-black placeholder:text-gray-400" placeholder="Address Line 1" />
                            <div className="grid grid-cols-2 gap-4">
                                <input className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black" placeholder="City" />
                                <input className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black" placeholder="ZIP" />
                            </div>
                        </div>
                        <button onClick={() => setStep(2)} className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg mt-8 hover:bg-gray-900 transition-all flex items-center justify-center gap-2">
                            Next: Payment <ChevronRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                )}

                {/* STEP 2: PAYMENT */}
                {step === 2 && (
                    <motion.div 
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900"><CreditCard className="text-primary"/> Payment Method</h2>
                        
                        {/* Fake Card Visual */}
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden mb-6">
                            <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="flex justify-between items-start mb-8">
                                <CreditCard className="w-8 h-8 opacity-80" />
                                <span className="font-mono opacity-50">Debit</span>
                            </div>
                            <div className="font-mono text-xl tracking-widest mb-6">•••• •••• •••• 4242</div>
                            <div className="flex justify-between items-end opacity-80 text-sm">
                                <div>
                                    <div className="text-[10px] uppercase opacity-60">Card Holder</div>
                                    <div>USER NAME</div>
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase opacity-60">Expires</div>
                                    <div>12/28</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <input className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-black placeholder:text-gray-400" placeholder="Card Number" />
                            <div className="grid grid-cols-2 gap-4">
                                <input className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black" placeholder="MM/YY" />
                                <input className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black" placeholder="CVC" />
                            </div>
                        </div>
                        <button onClick={() => setStep(3)} className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg mt-8 hover:bg-gray-900 transition-all shadow-xl shadow-gray-200">
                            Pay Now <span className="text-sm font-normal opacity-70 ml-2">($ Mock)</span>
                        </button>
                    </motion.div>
                )}

                {/* STEP 3: PROCESSING */}
                {step === 3 && (
                    <motion.div 
                        key="step3"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="flex flex-col items-center justify-center h-full py-12 text-center"
                    >
                        <div className="relative">
                            <div className="w-24 h-24 border-4 border-gray-100 border-t-black rounded-full animate-spin mb-8" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ShieldCheck className="w-8 h-8 text-gray-300" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Processing Payment</h3>
                        <p className="text-gray-500 h-6">
                            {loadingStep === 0 && "Securely connecting..."}
                            {loadingStep === 1 && "Verifying card details..."}
                            {loadingStep === 2 && "Checking product availability..."}
                            {loadingStep === 3 && "Finalizing order..."}
                        </p>
                    </motion.div>
                )}

                {/* STEP 4: SUCCESS */}
                {step === 4 && (
                    <motion.div 
                        key="step4"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center h-full py-12 text-center"
                    >
                        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-green-100 shadow-xl">
                            <Check className="w-12 h-12" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
                        <p className="text-gray-500 mb-8">Your order has been placed securely.</p>
                        
                        <div className="bg-gray-50 p-6 rounded-2xl w-full mb-8">
                            <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-2">Generating Tracking Code...</p>
                            <Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" />
                        </div>

                        <p className="text-sm text-gray-400">Redirecting to order tracking...</p>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
