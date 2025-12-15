import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-white/5 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tighter">VELO</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Reimagining spatial commerce. <br/>
            No hard cuts. Just motion.
          </p>
        </div>

        {/* Shop Column */}
        <div className="space-y-4">
          <h4 className="font-bold text-foreground">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/latest" className="hover:text-primary transition-colors">Latest Drops</Link></li>
            <li><Link href="/men" className="hover:text-primary transition-colors">Men</Link></li>
            <li><Link href="/women" className="hover:text-primary transition-colors">Women</Link></li>
            <li><Link href="/accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="space-y-4">
          <h4 className="font-bold text-foreground">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
            <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Socials / Newsletter */}
        <div className="space-y-4">
          <h4 className="font-bold text-foreground">Stay Connected</h4>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Twitter className="w-4 h-4" /></Link>
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Instagram className="w-4 h-4" /></Link>
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Facebook className="w-4 h-4" /></Link>
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Youtube className="w-4 h-4" /></Link>
          </div>
          <div className="pt-4">
            <p className="text-xs text-muted-foreground mb-2">Subscribe to our newsletter</p>
            <div className="flex gap-2">
               <input type="email" placeholder="Email address" className="bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-primary/50" />
               <button className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-bold">→</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
        <p>© 2024 VELO Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
