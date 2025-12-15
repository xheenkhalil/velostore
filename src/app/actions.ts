'use server'

import { client } from "@/lib/sanity"

export async function checkStock(productId: string): Promise<boolean> {
  // Real implementation would check Sanity or an ERP
  try {
    const product = await client.fetch(`*[_type == "product" && _id == $id][0] { stock }`, { id: productId })
    return product?.stock > 0
  } catch (e) {
    console.error("Stock check failed:", e)
    // Fallback for demo/dev if Sanity isn't fully connected
    return true 
  }
}

export async function addToCartAction(productId: string, quantity: number) {
  const inStock = await checkStock(productId)
  
  if (!inStock) {
    return { success: false, message: "Out of stock" }
  }

  // In a real app, you might sync this to a server-side session or DB here
  return { success: true, message: "Added to cart" }
}
