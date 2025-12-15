'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react'
import { useCartStore } from '@/store/cart'

interface Product {
  _id: string
  title: string
  slug: { current: string }
  price: number
  mainImage: any
  tag?: string
}

interface ProductCardProps {
  product: Product
  index: number
}

const getImageUrl = (image: any) => {
  if (typeof image === 'string') return image
  return 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop'
}

export const ProductCard = memo(function ProductCard({ product, index }: ProductCardProps) {
  const addItem = useCartStore(s => s.addItem)
  const toggleCart = useCartStore(s => s.toggleCart)
  const toggleWishlist = useCartStore(s => s.toggleWishlist)
  const wishlist = useCartStore(s => s.wishlist)
  const isWishlisted = wishlist.includes(product._id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: product._id,
      title: product.title,
      price: product.price,
      image: getImageUrl(product.mainImage),
      quantity: 1,
      slug: product.slug.current
    })
    toggleCart()
  }

  return (
    <Link 
      href={`/product/${product.slug.current}`} 
      className="group relative block bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/50 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1"
    >
      
      {/* Discount Badge */}
      {product.tag && (
        <div className="absolute top-3 left-3 z-20 bg-black/80 backdrop-blur text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
          {product.tag}
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-transparent">
        {/* Subtle radial gradient backing for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <Image
          src={getImageUrl(product.mainImage)}
          alt={product.title}
          fill
          className="object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        
        {/* Quick Actions (Floating Glass Pill) */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-20">
           <div className="flex gap-2 p-1.5 bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-white/20">
              <button 
                  onClick={handleAddToCart}
                  className="p-2.5 bg-black text-white rounded-full hover:scale-110 active:scale-95 transition-all shadow-md" 
                  title="Add to Cart"
              >
                  <ShoppingCart className="w-4 h-4" />
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault()
                  toggleWishlist(product._id)
                }}
                className={`p-2.5 rounded-full hover:scale-110 transition-all ${isWishlisted ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-500'}`}
              >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-500 hover:scale-110 transition-all">
                  <Eye className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 pt-2 bg-white/30 group-hover:bg-white/50 transition-colors duration-300">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1 mb-1 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        
        {/* Ratings */}
        <div className="flex items-center gap-1 mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="flex text-yellow-500">
                {[1,2,3,4,5].map(i => (
                   <Star key={i} className="w-3 h-3 fill-current" />
                ))}
            </div>
            <span className="text-[10px] font-medium text-gray-500 ml-1">(42)</span>
        </div>

        <div className="flex items-center justify-between mt-3">
            <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                <span className="text-[10px] text-gray-400 line-through font-medium">${(product.price * 1.2).toFixed(0)}</span>
            </div>
            
            <button className="text-xs font-bold text-black border-b-2 border-transparent group-hover:border-primary transition-all">
                View
            </button>
        </div>
      </div>
    </Link>
  )
})
