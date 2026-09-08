# WorkHive

**WorkHive** is a large-scale, production-ready Next.js 14 application that guides users on legitimate online earning methods. 100% free, fully in English.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ ([Download here](https://nodejs.org))
- npm or yarn

### Installation

```bash
# Navigate to project
cd WorkHive

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Icons | Lucide React |
| Animation | Framer Motion |
| State | React Context API |
| Font | Inter (Google Fonts) |
| Auth | Simulated (swappable with NextAuth.js) |

## 📁 Project Structure

```
WorkHive/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── dashboard/          # User dashboard (auth-gated)
│   ├── opportunity/[id]/   # Opportunity detail pages
│   ├── categories/[slug]/  # Category pages
│   └── support/            # Support/contact page
├── components/
│   ├── layout/             # Navbar, Footer, PageWrapper
│   ├── home/               # Hero, Categories, OpportunityGrid
│   ├── cards/              # OpportunityCard, CategoryCard
│   ├── ui/                 # Badge, BookmarkButton, Modal, Spinner
│   └── auth/               # GoogleAuthButton
├── context/
│   ├── AuthContext.tsx     # Simulated Google Auth
│   └── SavedContext.tsx    # Bookmark/favorites state
├── data/
│   └── opportunities.ts    # All opportunity content
├── lib/utils.ts            # Utility functions
└── types/index.ts          # TypeScript interfaces
```

## ✨ Features

- 🔐 **Google Sign-In UI** — Simulated auth with localStorage session persistence
- 📌 **Bookmark System** — Save/unsave opportunities; persists across sessions
- 🔍 **Search & Filter** — Filter by category and difficulty level
- 📱 **Fully Responsive** — Mobile-first with hamburger nav
- 🎨 **Enterprise Design** — Apple/Vercel/Stripe-style minimalist UI
- ⚡ **Framer Motion** — Buttery smooth page transitions and micro-animations
- 🗄️ **5 Categories** — 11 detailed opportunities with step-by-step guides
- 🌐 **SEO Optimized** — Metadata, OpenGraph, and static generation

## 📞 Support

- **WhatsApp**: [+94 70 160 7317](https://wa.me/94701607317)
- **Email**: [janithadilshan317@gmail.com](mailto:janithadilshan317@gmail.com)

## 📜 License

© 2026 WorkHive by Janitha Dilshan. All rights reserved.
