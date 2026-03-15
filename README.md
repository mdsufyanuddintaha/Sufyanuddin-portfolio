# Portfolio — Next.js 14 Dark Theme

https://sufyanuddin-portfolio.vercel.app/

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui components
- **3D Animations**: Three.js + React Three Fiber + @react-three/drei
- **Motion**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Sections
- 🏠 **Home** — 3D distorted sphere with particle field background
- ⚡ **Skills** — Animated skill bars + technology badges
- 🚀 **Projects** — Filterable project grid with category tabs
- 💼 **Experience** — Timeline layout with alternating cards
- 📬 **Contact** — Working contact form with validation



## Contact Form Setup

The contact form is wired to `/api/contact`. To receive emails:

1. Sign up at [Resend](https://resend.com) (free tier available)
2. Copy `.env.local.example` to `.env.local`
3. Add your `RESEND_API_KEY`
4. Uncomment the Resend code in `app/api/contact/route.ts`

## Customization
- Update name/links in `components/Navbar.tsx`
- Edit projects in `components/sections/Projects.tsx`
- Edit experience in `components/sections/Experience.tsx`
- Update contact info in `components/sections/Contact.tsx`

## Performance
- First Load JS: ~140kB (excellent for 3D-enabled site)
- 3D components lazy-loaded with `next/dynamic`
- Particles capped at 200 for performance
- Images optimized via Next.js Image
