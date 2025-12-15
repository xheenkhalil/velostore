import { ProductCard } from "@/components/ui/ProductCard"
import { client } from "@/lib/sanity"
import { ArrowRight, Zap, RefreshCw, ShieldCheck, Flame, Star, TrendingUp } from "lucide-react"
import { HeroSlideshow } from "@/components/layout/HeroSlideshow"
import { MOCK_PRODUCTS, CATEGORIES } from "@/lib/mockData"
import Link from "next/link"

const CATEGORY_IMAGES: Record<string, string> = {
  Phones: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop',
  Fashion: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
  Electronics: 'https://images.unsplash.com/photo-1498049860654-af1a5c5668ba?q=80&w=2070&auto=format&fit=crop',
  Home: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop',
  Beauty: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2066&auto=format&fit=crop',
  Sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop',
  Gaming: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop'
}

export const revalidate = 60

export default async function Home(props: { searchParams: Promise<{ category?: string }> }) {
  const searchParams = await props.searchParams
  let products = [...MOCK_PRODUCTS]
  
  // Real Sanity Fetch (Fallback to mock if empty/fail)
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
       const sanityProducts = await client.fetch(`*[_type == "product"]`)
       if (sanityProducts && sanityProducts.length > 0) {
          // Merge or prefer sanity? For this demo, let's keep mock as primary for volume
          // or just append. Let's just use mock for the requested "volume" feel.
       }
    }
  } catch (e) { console.warn("Sanity fetch failed, using mock data") }

  // Filter if category selected
  const selectedCategory = searchParams?.category
  if (selectedCategory) {
      products = products.filter(p => p.category === selectedCategory)
  }

  // Derived Sections
  const bestDeals = products.filter(p => p.tag === 'Best Seller' || p.tag === 'Hot' || p.tag === '-10%').slice(0, 8)
  const newArrivals = products.filter(p => p.tag === 'New' || p.tag === 'Fresh').slice(0, 8)
  // If no category selected, show everything in Official Store, otherwise just filtered
  const officialStore = products 

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      
      {/* 1. HERO SLIDER - Only show on Home (no category selected) */}
      {!selectedCategory && (
          <section className="bg-white pb-6 pt-2">
             <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[420px]">
                 <HeroSlideshow />
    
                <div className="md:col-span-4 flex flex-col gap-4 h-full md:h-auto">
                    <Link href="/?category=Fashion" className="flex-1 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 flex flex-col justify-center items-start shadow-sm border border-orange-100 group cursor-pointer hover:shadow-lg transition-all relative overflow-hidden">
                        <div className="flex items-center gap-2 mb-2 text-orange-600 font-bold uppercase text-xs tracking-wider z-10"><Flame className="w-4 h-4"/> Hot Picks</div>
                        <h3 className="text-2xl font-bold text-gray-900 leading-none group-hover:text-primary transition-colors z-10">Summer <br/>Collection</h3>
                        <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop" className="absolute right-0 bottom-0 w-32 drop-shadow-lg group-hover:scale-110 transition-transform opacity-80" alt="Shoe" />
                    </Link>
                    <Link href="/?category=Phones" className="flex-1 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 flex flex-col justify-center items-start shadow-sm border border-blue-100 group cursor-pointer hover:shadow-lg transition-all relative overflow-hidden">
                         <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold uppercase text-xs tracking-wider z-10"><Star className="w-4 h-4"/> Top Rated</div>
                        <h3 className="text-2xl font-bold text-gray-900 leading-none group-hover:text-blue-600 transition-colors z-10">Official <br/>Store</h3>
                        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop" className="absolute right-0 bottom-0 w-24 drop-shadow-lg group-hover:scale-110 transition-transform opacity-80" alt="Phone" />
                    </Link>
                </div>
             </div>
          </section>
      )}




      {/* 2. CATEGORY ICONS */}
      <section className="bg-white py-6 border-b border-gray-100 mb-8 sticky top-20 z-30 shadow-sm opacity-95 backdrop-blur">
          <div className="container mx-auto px-4 flex justify-between gap-4 overflow-x-auto no-scrollbar">
              <Link href="/" className={`flex flex-col items-center gap-2 min-w-[80px] group ${!selectedCategory ? 'text-primary' : 'text-gray-600'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all overflow-hidden border-2 ${!selectedCategory ? 'border-primary' : 'border-transparent group-hover:border-primary'}`}>
                      {!selectedCategory ? (
                        <div className="bg-primary w-full h-full flex items-center justify-center text-white">
                             <TrendingUp className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="bg-gray-100 w-full h-full flex items-center justify-center group-hover:bg-gray-200">
                             <TrendingUp className="w-5 h-5" />
                        </div>
                      )}
                  </div>
                  <span className="text-xs font-medium group-hover:text-primary">All</span>
              </Link>
              {CATEGORIES.map((cat, i) => (
                  <Link href={`/?category=${cat}`} key={cat} className={`flex flex-col items-center gap-2 min-w-[80px] group ${selectedCategory === cat ? 'text-primary' : 'text-gray-600'}`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all overflow-hidden border-2 relative ${selectedCategory === cat ? 'border-primary' : 'border-transparent group-hover:border-primary'}`}>
                          <img 
                            src={CATEGORY_IMAGES[cat] || 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=500&auto=format&fit=crop'} 
                            alt={cat}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                          {/* Overlay for inactive state to make text readable/dim image if needed, or just clean image */}
                      </div>
                      <span className="text-xs font-medium group-hover:text-primary">{cat}</span>
                  </Link>
              ))}
          </div>
      </section>

      <main className="container mx-auto px-4 pb-24 space-y-12">
         
         {/* SECTION 1: BEST DEALS (Only show if no specific category or if relevant) */}
         {bestDeals.length > 0 && !selectedCategory && (
             <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                 <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                     <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <div className="bg-red-500 text-white p-1 rounded"><Zap className="w-5 h-5"/></div>
                        Best Deals
                     </h2>
                     <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">SEE ALL <ArrowRight className="w-4 h-4"/></button>
                 </div>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {bestDeals.map((product: any, index: number) => (
                        <ProductCard key={product._id + 'deals'} product={product} index={index} />
                    ))}
                 </div>
             </section>
         )}

         {/* SECTION 2: NEW ARRIVALS */}
         {newArrivals.length > 0 && !selectedCategory && (
             <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 shadow-sm text-white">
                 <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                     <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span className="text-primary">NEW</span> ARRIVALS
                     </h2>
                     <button className="text-sm font-bold text-white/80 hover:text-white hover:underline flex items-center gap-1">SEE ALL <ArrowRight className="w-4 h-4"/></button>
                 </div>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {newArrivals.map((product: any, index: number) => (
                        <ProductCard key={product._id + 'new'} product={product} index={index} />
                    ))}
                 </div>
             </section>
         )}

        {/* SECTION 3: OFFICIAL STORE (Main Grid) */}
         <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
             <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                 <h2 className="text-2xl font-bold text-gray-900">
                    {selectedCategory ? `${selectedCategory} Collection` : 'Official Store'}
                 </h2>
                 <span className="text-sm text-gray-500 font-medium">{officialStore.length} Items found</span>
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {officialStore.map((product: any, index: number) => (
                    <ProductCard key={product._id + 'store'} product={product} index={index} />
                ))}
             </div>
             {officialStore.length === 0 && (
                 <div className="py-20 text-center text-gray-500">
                     No products found in this category.
                 </div>
             )}
         </section>

      </main>
    </div>
  )
}
