'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingBag, Plus, Minus } from "lucide-react"
import { useCartStore } from "@/store/cart"
import { useState } from "react"

export function ProductDetailClient({ product }: { product: any }) {
  const addItem = useCartStore(s => s.addItem)
  const toggleCart = useCartStore(s => s.toggleCart)

  const [quantity, setQuantity] = useState(1)
  const stock = 15 // Mock stock
  
  const description = product.description || `Experience the pinnacle of ${product.category || 'design'} with the ${product.title}. Meticulously crafted for those who demand excellence, this product combines premium materials with cutting-edge engineering. Features include advanced durability, ergonomic comfort, and a timeless aesthetic that adapts to your lifestyle.`

  const handleAddToCart = () => {
    addItem({
      id: product._id,
      title: product.title,
      price: product.price,
      image: typeof product.mainImage === 'string' ? product.mainImage : 'placeholder',
      quantity: quantity,
      slug: product.slug.current
    })
    toggleCart()
  }

  const handleBuyNow = () => {
    addItem({
      id: product._id,
      title: product.title,
      price: product.price,
      image: typeof product.mainImage === 'string' ? product.mainImage : 'placeholder',
      quantity: quantity,
      slug: product.slug.current
    })
    // Redirect to checkout immediately (will implement mock checkout later)
    window.location.href = '/checkout' 
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Back Button */}
      <Link href="/" className="absolute top-8 left-8 z-20 p-2 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors">
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* Image Section - The Morph Target */}
        <div className="relative h-[50vh] lg:h-full w-full bg-secondary/10">
          <motion.div
            layoutId={`product-image-${product.slug.current}`}
            className="relative w-full h-full"
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
             <Image
                src={typeof product.mainImage === 'string' ? product.mainImage : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop'}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
             />
          </motion.div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center p-8 lg:p-24 relative z-10 overflow-y-auto">
           <motion.h1 
             layoutId={`product-title-${product.slug.current}`}
             className="text-4xl lg:text-6xl font-bold tracking-tighter mb-4 text-foreground"
           >
             {product.title}
           </motion.h1>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3, duration: 0.5 }}
           >
             <div className="flex items-center gap-4 mb-6">
                <p className="text-3xl text-primary font-bold">${product.price}</p>
                <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">
                  In Stock: {stock} units
                </div>
             </div>

             <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
               {description}
             </p>

             {/* Quantity Selector */}
             <div className="flex items-center gap-4 mb-8">
                <span className="font-medium text-gray-900">Quantity</span>
                <div className="flex items-center rounded-full border border-gray-200">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-l-full transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(Math.min(stock, quantity + 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-r-full transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                </div>
             </div>

             <div className="flex gap-4">
                 <button 
                   onClick={handleAddToCart}
                   className="flex-1 group flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-colors"
                 >
                   Add to Cart
                   <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 </button>
                 <button 
                    onClick={handleBuyNow}
                    className="flex-1 bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-orange-200"
                 >
                    Buy Now
                 </button>
             </div>
           </motion.div>
        </div>
      </div>
    </div>
  )
}
