'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { MOCK_PRODUCTS } from '@/lib/mockData'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export function SearchWithSuggestions() {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Filter products based on query
  const suggestions = query.length > 0 
    ? MOCK_PRODUCTS.filter(p => p.title.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
    : []

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [wrapperRef])

  const handleSearch = () => {
    if (query.trim()) {
        console.log("Searching for:", query)
        // In a real app, this would route to /search?q=query
        // For now, we'll just close and clear
        setIsFocused(false)
        setQuery('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div ref={wrapperRef} className="flex-1 max-w-3xl hidden md:block relative group z-50">
      <div className="relative w-full flex items-center">
         <Search className={`absolute left-4 w-5 h-5 transition-colors ${isFocused ? 'text-primary' : 'text-gray-400'}`}/>
         <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search for products, brands and categories..." 
            className="w-full h-12 pl-12 pr-32 rounded-full border border-white/20 bg-white/10 text-white placeholder:text-gray-400 focus:bg-white focus:text-black focus:placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm group-hover:shadow-md"
         />
         {query && (
             <button onClick={() => setQuery('')} className="absolute right-32 mr-2 p-1 hover:bg-gray-200 rounded-full text-gray-500">
                 <X className="w-4 h-4" />
             </button>
         )}
         <button 
            onClick={handleSearch}
            className="absolute right-1 top-1 bottom-1 bg-primary text-black rounded-full px-8 font-bold text-sm hover:scale-105 active:scale-95 transition-all"
         >
            SEARCH
         </button>
      </div>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {isFocused && (
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 text-black"
            >
                {query.length === 0 ? (
                    <div className="p-4">
                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3 px-2">Trending Searches</h4>
                        <div className="flex flex-wrap gap-2">
                            {['iPhone 15', 'Nike Shoes', 'PS5', 'Watches'].map(term => (
                                <button key={term} onClick={() => setQuery(term)} className="flex items-center gap-1 bg-gray-100 hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full text-sm font-medium transition-colors">
                                    <TrendingUp className="w-3 h-3" /> {term}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="py-2">
                        {suggestions.length > 0 ? (
                            suggestions.map(product => (
                                <Link 
                                    href={`/product/${product.slug.current}`} 
                                    key={product._id} 
                                    onClick={() => setIsFocused(false)}
                                    className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors border-b last:border-0 border-gray-50"
                                >
                                    <img src={product.mainImage} alt={product.title} className="w-10 h-10 object-contain rounded bg-gray-100 p-1" />
                                    <div>
                                        <div className="font-medium text-sm text-gray-900">{product.title}</div>
                                        <div className="text-xs text-gray-500 font-medium">{product.category}</div>
                                    </div>
                                    <div className="ml-auto text-primary font-bold text-sm">${product.price}</div>
                                </Link>
                            ))
                        ) : (
                            <div className="p-4 text-center text-gray-500 text-sm">
                                No products found for "{query}"
                            </div>
                        )}
                        {suggestions.length > 0 && (
                            <button className="w-full p-3 text-center text-xs font-bold text-primary hover:bg-gray-50 uppercase tracking-wider border-t border-gray-100">
                                View All Results
                            </button>
                        )}
                    </div>
                )}
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
