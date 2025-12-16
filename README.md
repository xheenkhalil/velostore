# VELO | Spatial E-Commerce

A modern, high-performance headless e-commerce application built with Next.js 15, featuring a spatial design aesthetic, Framer Motion animations, and a seamless shopping experience.

![Velo Preview](https://velostores.vercel.app)

## 🚀 Key Features

- **Spatial Design**: Immersive UI with glassmorphism, smooth transitions, and persistent layout animations.
- **State Management**: Robust cart and wishlist management using Zustand with local storage persistence.
- **Checkout & Cart**:
  - **Direct Cart Access**: Dedicated cart page for reviewing items.
  - **Smart Checkout**: Step-by-step checkout flow (Address -> Payment -> Processing -> Success) with visual progress indicators.
  - **Auto-Cleanup**: Cart automatically clears upon successful order placement.
- **Wishlist**: Save favorite items for later. Fully persistent.
- **Mobile First**: Optimized product cards with accessible quick actions on touch devices.
- **Performance**:
  - Next.js App Router for server-side rendering and static generation.
  - Optimized images via `next/image`.
  - Code splitting and lazy loading.
- **SEO Optimized**: Semantic HTML, meta tags, and structured data ready.

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Icons**: Lucide React
- **Fonts**: Geist / Geist Mono (via `next/font`)

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 18+ installed
- npm, pnpm, or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/xheenkhalil/velo.git
    cd velo
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Open the app**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
src/
├── app/                # App Router pages and layouts
│   ├── cart/           # Shopping Cart page
│   ├── checkout/       # Checkout flow
│   ├── product/        # Product details [slug]
│   └── wishlist/       # Wishlist page
├── components/         # Reusable UI components
│   ├── layout/         # Navbar, Footer
│   ├── ui/             # ProductCard, Buttons, etc.
│   └── features/       # Feature-specific components
├── store/              # Global state (Zustand)
│   └── cart.ts         # Cart & Wishlist logic
└── lib/                # Utilities and helpers
```

## 🚧 Roadmap / Current Mock Status

This project is currently a **Frontend Prototype** with simulated backend features:

- **Payments**: The checkout process simulates payment verification. No actual card processing occurs.
- **Backend**: Product data is currently mocked or fetched from static sources. A headless CMS (like Sanity or Shopify) integration is the expected next step.
- **Authentication**: User profile features are UI-only.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
