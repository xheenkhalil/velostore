import { client } from "@/lib/sanity"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ProductDetailClient } from "./components/ProductDetailClient"
import { MOCK_PRODUCTS } from "@/lib/mockData"

export const revalidate = 60

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  let product = null
  try {
     if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
       product = await client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug })
     }
  } catch (e) {}

  if (!product) {
    product = MOCK_PRODUCTS.find(p => p.slug.current === slug)
  }

  if (!product) return notFound()

  return <ProductDetailClient product={product} />
}
