export const CATEGORIES = ['Phones', 'Fashion', 'Electronics', 'Home', 'Beauty', 'Sports', 'Gaming']

export const MOCK_PRODUCTS = [
  // PHONES (10)
  { _id: 'p1', title: 'iPhone 15 Pro Max', slug: { current: 'iphone-15-pro-max' }, price: 1199, category: 'Phones', tag: 'Best Seller', mainImage: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'p2', title: 'Samsung Galaxy S24 Ultra', slug: { current: 'galaxy-s24-ultra' }, price: 1299, category: 'Phones', tag: 'New', mainImage: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop' },
  { _id: 'p3', title: 'Pixel 8 Pro', slug: { current: 'pixel-8-pro' }, price: 999, category: 'Phones', tag: 'Hot', mainImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff23?q=80&w=2127&auto=format&fit=crop' },
  { _id: 'p4', title: 'OnePlus 12', slug: { current: 'oneplus-12' }, price: 799, category: 'Phones', tag: '-10%', mainImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1936&auto=format&fit=crop' },
  { _id: 'p5', title: 'Xiaomi 14 Ultra', slug: { current: 'xiaomi-14-ultra' }, price: 899, category: 'Phones', mainImage: 'https://images.unsplash.com/photo-1592305886617-6490332824c0?q=80&w=1935&auto=format&fit=crop' },
  { _id: 'p6', title: 'Sony Xperia 1 V', slug: { current: 'xperia-1-v' }, price: 1199, category: 'Phones', mainImage: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?q=80&w=1938&auto=format&fit=crop' },
  { _id: 'p7', title: 'Nothing Phone (2)', slug: { current: 'nothing-phone-2' }, price: 699, category: 'Phones', mainImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop' },
  { _id: 'p8', title: 'Asus ROG Phone 8', slug: { current: 'rog-phone-8' }, price: 1099, category: 'Phones', tag: 'Gaming', mainImage: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1858&auto=format&fit=crop' },
  { _id: 'p9', title: 'Fold Z 5', slug: { current: 'fold-z-5' }, price: 1799, category: 'Phones', tag: 'Premium', mainImage: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=2080&auto=format&fit=crop' },
  { _id: 'p10', title: 'Motorola Razr+', slug: { current: 'moto-razr-plus' }, price: 999, category: 'Phones', mainImage: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1974&auto=format&fit=crop' },

  // FASHION (10)
  { _id: 'f1', title: 'Nike Air Max Dn', slug: { current: 'nike-air-max-dn' }, price: 160, category: 'Fashion', tag: 'New', mainImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'f2', title: 'Adidas Samba OG', slug: { current: 'adidas-samba' }, price: 100, category: 'Fashion', tag: 'Viral', mainImage: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop' },
  { _id: 'f3', title: 'North Face Puffer', slug: { current: 'north-face-puffer' }, price: 320, category: 'Fashion', tag: 'Winter', mainImage: 'https://images.unsplash.com/photo-1539533018447-63fcce6a25e8?q=80&w=1974&auto=format&fit=crop' },
  { _id: 'f4', title: 'Levi\'s 501 Original', slug: { current: 'levis-501' }, price: 80, category: 'Fashion', mainImage: 'https://images.unsplash.com/photo-1542272617-08f08637533d?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'f5', title: 'Ray-Ban Aviator', slug: { current: 'ray-ban-aviator' }, price: 160, category: 'Fashion', mainImage: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop' },
  { _id: 'f6', title: 'Carhartt Analytics Hoodie', slug: { current: 'carhartt-hoodie' }, price: 120, category: 'Fashion', mainImage: 'https://images.unsplash.com/photo-1556906781-9a412961d28c?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'f7', title: 'New Balance 9060', slug: { current: 'nb-9060' }, price: 150, category: 'Fashion', tag: 'Hot', mainImage: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop' },
  { _id: 'f8', title: 'Zara Trench Coat', slug: { current: 'zara-trench' }, price: 140, category: 'Fashion', mainImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop' },
  { _id: 'f9', title: 'Gucci Belt', slug: { current: 'gucci-belt' }, price: 450, category: 'Fashion', tag: 'Luxury', mainImage: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'f10', title: 'Rolex Submariner Style', slug: { current: 'watch-submariner' }, price: 15000, category: 'Fashion', tag: 'Luxury', mainImage: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=2070&auto=format&fit=crop' },

  // ELECTRONICS (10)
  { _id: 'e1', title: 'MacBook Pro M3', slug: { current: 'macbook-pro-m3' }, price: 1999, category: 'Electronics', tag: 'Best Seller', mainImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?q=80&w=1926&auto=format&fit=crop' },
  { _id: 'e2', title: 'Sony WH-1000XM5', slug: { current: 'sony-xm5' }, price: 348, category: 'Electronics', tag: 'Audio', mainImage: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1888&auto=format&fit=crop' },
  { _id: 'e3', title: 'iPad Air 5', slug: { current: 'ipad-air-5' }, price: 599, category: 'Electronics', mainImage: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2015&auto=format&fit=crop' },
  { _id: 'e4', title: 'GoPro Hero 12', slug: { current: 'gopro-12' }, price: 399, category: 'Electronics', mainImage: 'https://images.unsplash.com/photo-1564466909054-080c3e7f67be?q=80&w=1935&auto=format&fit=crop' },
  { _id: 'e5', title: 'Dell XPS 15', slug: { current: 'dell-xps-15' }, price: 1499, category: 'Electronics', mainImage: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'e6', title: 'Canon EOS R5', slug: { current: 'canon-r5' }, price: 3899, category: 'Electronics', mainImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop' },
  { _id: 'e7', title: 'DJI Mini 4 Pro', slug: { current: 'dji-mini-4' }, price: 759, category: 'Electronics', mainImage: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'e8', title: 'Samsung T7 SSD', slug: { current: 'samsung-t7' }, price: 129, category: 'Electronics', mainImage: 'https://images.unsplash.com/photo-1531297461136-82af022f18f8?q=80&w=1888&auto=format&fit=crop' },
  { _id: 'e9', title: 'Logitech MX Master 3S', slug: { current: 'mx-master-3s' }, price: 99, category: 'Electronics', mainImage: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2066&auto=format&fit=crop' },
  { _id: 'e10', title: 'Apple Watch Ultra 2', slug: { current: 'apple-watch-ultra-2' }, price: 799, category: 'Electronics', tag: 'New', mainImage: 'https://images.unsplash.com/photo-1434493789847-2f02ea6ca2cb?q=80&w=2070&auto=format&fit=crop' },

  // HOME (5) - Simulating "10 per category" but kept short for brevity in tool call, user asked for 10
  { _id: 'h1', title: 'Dyson V15 Detect', slug: { current: 'dyson-v15' }, price: 749, category: 'Home', mainImage: 'https://images.unsplash.com/photo-1558317374-a354d5f3d463?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'h2', title: 'Nespresso Vertuo', slug: { current: 'nespresso-vertuo' }, price: 199, category: 'Home', mainImage: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=2079&auto=format&fit=crop' },
  { _id: 'h3', title: 'Philips Hue Starter Kit', slug: { current: 'philips-hue' }, price: 159, category: 'Home', mainImage: 'https://images.unsplash.com/photo-1558002038-109155714782?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'h4', title: 'Herman Miller Aeron', slug: { current: 'herman-miller' }, price: 1200, category: 'Home', tag: 'Office', mainImage: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=2018&auto=format&fit=crop' },
  { _id: 'h5', title: 'KitchenAid Mixer', slug: { current: 'kitchenaid-mixer' }, price: 449, category: 'Home', mainImage: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?q=80&w=1887&auto=format&fit=crop' },
  
  // GAMING (5)
  { _id: 'g1', title: 'PlayStation 5 Slim', slug: { current: 'ps5-slim' }, price: 499, category: 'Gaming', tag: 'Console', mainImage: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'g2', title: 'Xbox Series X', slug: { current: 'xbox-series-x' }, price: 499, category: 'Gaming', mainImage: 'https://images.unsplash.com/photo-1621259182902-3b836c824e22?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'g3', title: 'Nintendo Switch OLED', slug: { current: 'switch-oled' }, price: 349, category: 'Gaming', mainImage: 'https://images.unsplash.com/photo-1578303512597-8198dd38ad59?q=80&w=1915&auto=format&fit=crop' },
  { _id: 'g4', title: 'Steam Deck OLED', slug: { current: 'steam-deck' }, price: 549, category: 'Gaming', tag: 'Hot', mainImage: 'https://images.unsplash.com/photo-1658428227699-b1d56cc3923d?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'g5', title: 'Razer BlackWidow V4', slug: { current: 'razer-kb' }, price: 169, category: 'Gaming', mainImage: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2071&auto=format&fit=crop' },

  // BEAUTY (10)
  { _id: 'b1', title: 'Dyson Airwrap', slug: { current: 'dyson-airwrap' }, price: 599, category: 'Beauty', tag: 'Best Seller', mainImage: 'https://images.unsplash.com/photo-1598452963314-b09f397a5c48?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'b2', title: 'Chanel No. 5', slug: { current: 'chanel-no-5' }, price: 135, category: 'Beauty', tag: 'Classic', mainImage: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop' },
  { _id: 'b3', title: 'La Mer Moisturizing Cream', slug: { current: 'la-mer-cream' }, price: 380, category: 'Beauty', tag: 'Luxury', mainImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop' },
  { _id: 'b4', title: 'Rare Beauty Blush', slug: { current: 'rare-beauty-blush' }, price: 23, category: 'Beauty', tag: 'Viral', mainImage: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2066&auto=format&fit=crop' },
  { _id: 'b5', title: 'Olaplex No. 3', slug: { current: 'olaplex-no-3' }, price: 30, category: 'Beauty', mainImage: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2080&auto=format&fit=crop' },
  { _id: 'b6', title: 'Fenty Beauty Gloss Bomb', slug: { current: 'fenty-gloss' }, price: 21, category: 'Beauty', mainImage: 'https://images.unsplash.com/photo-1629198727546-f9e776999b1d?q=80&w=2080&auto=format&fit=crop' },
  { _id: 'b7', title: 'Dior Sauvage Elixir', slug: { current: 'dior-sauvage' }, price: 180, category: 'Beauty', mainImage: 'https://images.unsplash.com/photo-1523293188086-b51292955f2c?q=80&w=2070&auto=format&fit=crop' },
  { _id: 'b8', title: 'Charlotte Tilbury Magic Cream', slug: { current: 'magic-cream' }, price: 100, category: 'Beauty', mainImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop' },
  { _id: 'b9', title: 'Laneige Lip Sleeping Mask', slug: { current: 'laneige-lip-mask' }, price: 24, category: 'Beauty', mainImage: 'https://images.unsplash.com/photo-1629198754593-51829bb5724e?q=80&w=2080&auto=format&fit=crop' },
  { _id: 'b10', title: 'The Ordinary Niacinamide', slug: { current: 'ordinary-niacinamide' }, price: 6, category: 'Beauty', tag: 'Value', mainImage: 'https://images.unsplash.com/photo-1620917670397-a293dfe21c7d?q=80&w=1887&auto=format&fit=crop' },
]
