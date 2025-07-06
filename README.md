# TentenAI Landing Page

A modern, multilingual AI services landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🌐 **Multilingual Support**: 6 languages (English, Traditional Chinese, Japanese, Korean, Simplified Chinese, Arabic)
- 🎨 **Palantir-inspired Design**: Clean, professional UI with smooth animations
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Performance Optimized**: Built with Next.js App Router and static generation
- 🎯 **AIDA Structure**: Attention, Interest, Desire, Action marketing framework

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tentenai-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
tentenai-landing/
├── app/
│   ├── [locale]/         # Locale-specific pages
│   │   ├── layout.tsx    # Locale layout with translations
│   │   ├── page.tsx      # Main landing page
│   │   └── globals.css   # Global styles
│   └── page.tsx          # Root redirect
├── components/
│   ├── layout/           # Navigation, Footer
│   ├── sections/         # Hero, Services, Industries, etc.
│   ├── ui/               # Reusable UI components
│   └── providers/        # Translation provider
├── lib/
│   ├── i18n.ts          # i18n configuration
│   └── utils.ts         # Utility functions
├── locales/             # Translation files
│   ├── en/
│   ├── zh-TW/
│   ├── ja/
│   ├── ko/
│   ├── zh-CN/
│   └── ar/
└── public/              # Static assets
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with default settings

The site is pre-configured for Vercel deployment with:
- Automatic builds on push
- Optimized for edge runtime
- i18n routing configured

### Environment Variables

No environment variables are required for basic deployment.

## Customization

### Adding a New Language

1. Add language config in `lib/i18n.ts`
2. Create translation file in `locales/[locale]/common.json`
3. The language will automatically appear in the language switcher

### Modifying Content

All text content is stored in translation files under `locales/`. Update these files to change:
- Headlines and copy
- Service descriptions
- Navigation labels
- CTAs

### Styling

- Tailwind config: `tailwind.config.ts`
- Global styles: `app/[locale]/globals.css`
- Component styles use Tailwind utility classes

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Static generation for all locale pages
- Optimized images and fonts
- Minimal JavaScript bundle

## License

Copyright © 2024 TentenAI. All rights reserved.