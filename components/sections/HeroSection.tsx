'use client'

import { Button } from '@/components/ui/button'
import { useTranslation } from '@/components/providers/TranslationProvider'
import { ArrowRight, Play, Sparkles, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const { t } = useTranslation()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    // Video loads when iframe is ready
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vimeo Video Background */}
      <div className="absolute inset-0 z-0">
        <div className={cn(
          "absolute inset-0 w-full h-full",
          "transition-opacity duration-1000",
          isVideoLoaded ? "opacity-100" : "opacity-0"
        )}>
          <iframe
            src="https://player.vimeo.com/video/785359226?h=5673840904&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&controls=0&background=1"
            className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
        </div>

        {/* Mesh gradient effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_black_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-sm text-white">
            <Sparkles className="mr-2 h-3.5 w-3.5 text-yellow-400" />
            <span>Leading the AI Revolution</span>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            <span className="block">{t('hero.headline')}</span>
          </h1>

          {/* Subheading */}
          <p className="mb-12 text-xl text-gray-200 sm:text-2xl lg:text-3xl max-w-3xl mx-auto">
            {t('hero.subheadline')}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Button 
              size="lg" 
              className="text-base bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              {t('hero.secondaryCta')}
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(t('attention.stats')).map(([key, stat]: [string, any]) => (
              <div key={key} className="text-center">
                <div className="text-4xl font-bold text-white sm:text-5xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm text-gray-300 sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  )
}