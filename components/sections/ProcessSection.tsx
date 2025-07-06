'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { useTranslation } from '@/components/providers/TranslationProvider'
import { Search, Map, Code, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'

const processIcons = {
  discovery: Search,
  strategy: Map,
  development: Code,
  deployment: Rocket,
}

export function ProcessSection() {
  const { t } = useTranslation()
  const steps = t('process.steps') as any as Record<string, { title: string; description: string }>

  return (
    <Section id="process" className="bg-gray-50">
      <SectionHeader
        title={t('process.title')}
        subtitle={t('process.subtitle')}
      />

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-12 left-8 right-8 h-0.5 bg-gray-300 hidden md:block" />

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {Object.entries(steps).map(([key, step], index) => {
              const Icon = processIcons[key as keyof typeof processIcons]
              
              return (
                <div
                  key={key}
                  className={cn(
                    "relative animate-fade-up"
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                    {index + 1}
                  </div>

                  {/* Icon Container */}
                  <div className="bg-white rounded-xl p-6 mb-4 shadow-sm hover:shadow-md transition-shadow relative">
                    <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connection Dot */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-accent rounded-full hidden md:block z-20" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}