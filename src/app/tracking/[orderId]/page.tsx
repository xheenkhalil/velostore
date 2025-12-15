'use client'

import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import { Check, Package, Truck, MapPin, ExternalLink, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const STATUS_STEPS = [
  { id: 1, label: 'Order Placed', date: 'Just now', icon: Package },
  { id: 2, label: 'Processing', date: 'In Progress', icon: LoaderIcon },
  { id: 3, label: 'Shipped', date: 'Pending', icon: Truck },
  { id: 4, label: 'Delivered', date: 'Estimated 2 Days', icon: MapPin },
]

function LoaderIcon({ className }: { className?: string }) {
  return (
    <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  )
}

export default function TrackingPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = use(params)
  
  // Simulate progress
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    // Fake progress update
    const t1 = setTimeout(() => setCurrentStep(2), 1500)
    const t2 = setTimeout(() => setCurrentStep(3), 3500)
    return () => { clearTimeout(t1); clearTimeout(t2); }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
       <div className="max-w-3xl mx-auto space-y-8">
           
           {/* Header Card */}
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
               <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                   <div>
                       <div className="flex items-center gap-2 mb-2">
                          <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">Active</span>
                          <span className="text-gray-400 text-sm">Via FedEx Express</span>
                       </div>
                       <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{orderId}</h1>
                       <p className="text-gray-500 mt-2">Expected Delivery: <span className="text-black font-bold">Mon, Dec 18</span></p>
                   </div>
                   <button className="bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg">
                       Track on Map <ExternalLink className="w-4 h-4"/>
                   </button>
               </div>
               {/* Decorative BG pattern */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gray-100 to-transparent rounded-bl-full -mr-16 -mt-16 z-0" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Timeline */}
               <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                   <h2 className="text-xl font-bold mb-8">Shipment Progress</h2>
                   <div className="space-y-8 relative">
                       {/* Connecting Line */}
                       <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-100" />
                       
                       {STATUS_STEPS.map((step, idx) => {
                           const isActive = idx + 1 === currentStep
                           const isCompleted = idx + 1 < currentStep
                           const StepIcon = step.icon

                           return (
                               <div key={step.id} className="relative flex items-start gap-4">
                                   <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center z-10 border-4 border-white transition-all duration-500 ${isCompleted ? 'bg-black text-white' : isActive ? 'bg-primary text-white scale-110 shadow-lg shadow-orange-200' : 'bg-gray-100 text-gray-400'}`}>
                                       {isCompleted ? <Check className="w-5 h-5" /> : <StepIcon className="w-5 h-5" />}
                                   </div>
                                   <div className={`pt-2 transition-opacity duration-500 ${idx + 1 > currentStep ? 'opacity-40' : 'opacity-100'}`}>
                                       <h3 className="font-bold text-lg text-gray-900">{step.label}</h3>
                                       <p className="text-sm text-gray-500">{step.date}</p>
                                   </div>
                               </div>
                           )
                       })}
                   </div>
               </div>

               {/* Right Side: Map & Support */}
               <div className="space-y-8">
                   <div className="bg-gray-200 h-64 rounded-3xl overflow-hidden relative shadow-inner">
                       <Image 
                         src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2831&auto=format&fit=crop"
                         alt="Map"
                         fill
                         className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                       />
                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                           <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute" />
                           <div className="w-3 h-3 bg-primary rounded-full relative shadow-lg border-2 border-white" />
                       </div>
                   </div>

                   <Link href="/user" className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                       <div className="flex justify-between items-center mb-2">
                           <h3 className="font-bold text-gray-900">Need Help?</h3>
                           <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors"/>
                       </div>
                       <p className="text-sm text-gray-500">Visit our help center or contact support.</p>
                   </Link>
                   
                   <Link href="/" className="block text-center text-sm font-bold text-gray-400 hover:text-black transition-colors">
                       Return to Shopping
                   </Link>
               </div>
           </div>
       </div>
    </div>
  )
}
