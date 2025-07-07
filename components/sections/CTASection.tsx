'use client'

import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/components/providers/TranslationProvider'
import { Calendar, Download } from 'lucide-react'
import { cn } from '@/lib/utils'

export function CTASection() {
  const { t } = useTranslation()

  return (
    <Section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-display-sm md:text-display font-bold text-gray-900 mb-6 animate-fade-up">
          {t('cta.title')}
        </h2>
        
        <p className="text-xl text-gray-600 mb-10 animate-fade-up animation-delay-100">
          {t('cta.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-200">
          <Button size="lg" className="group">
            <Calendar className="mr-2 w-5 h-5" />
            {t('cta.button')}
          </Button>
          
          <span className="text-gray-500">{t('cta.or')}</span>
          
          <Button size="lg" variant="secondary" className="group">
            <Download className="mr-2 w-5 h-5" />
            {t('cta.secondary')}
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>
    </Section>
  )
}