import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string
  title: string
  price: number
  image: string
  quantity: number
  slug: string
}

interface CartStore {
  items: CartItem[]
  wishlist: string[]
  isOpen: boolean
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  toggleCart: () => void
  toggleWishlist: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      wishlist: [],
      isOpen: false,
      addItem: (item) => set((state) => {
        const existing = state.items.find((i) => i.id === item.id)
        if (existing) {
          return {
            items: state.items.map((i) => 
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            )
          }
        }
        return { items: [...state.items, { ...item, quantity: item.quantity }] }
      }),
      removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      toggleWishlist: (id) => set((state) => {
        const inWishlist = state.wishlist.includes(id)
        return {
          wishlist: inWishlist 
            ? state.wishlist.filter(wId => wId !== id)
            : [...state.wishlist, id]
        }
      }),
      updateQuantity: (id, quantity) => set((state) => {
        if (quantity < 1) {
          return { items: state.items.filter((i) => i.id !== id) }
        }
        return {
          items: state.items.map((i) => 
            i.id === id ? { ...i, quantity } : i
          )
        }
      })
    }),
    {
      name: 'cart-storage',
    }
  )
)
