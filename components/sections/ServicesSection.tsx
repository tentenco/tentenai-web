'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { useTranslation } from '@/components/providers/TranslationProvider'
import { 
  Sparkles, 
  Brain, 
  Eye, 
  MessageSquare, 
  Database, 
  Lightbulb 
} from 'lucide-react'
import { cn } from '@/lib/utils'

const serviceIcons = {
  genai: Sparkles,
  ml: Brain,
  cv: Eye,
  nlp: MessageSquare,
  data: Database,
  consulting: Lightbulb,
}

export function ServicesSection() {
  const { t } = useTranslation()
  const services = t('services.items') as any as Record<string, { title: string; description: string }>

  return (
    <Section id="services" className="bg-gray-50">
      <SectionHeader
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(services).map(([key, service], index) => {
          const Icon = serviceIcons[key as keyof typeof serviceIcons]
          
          return (
            <div
              key={key}
              className={cn(
                "group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300",
                "border border-gray-100 hover:border-gray-200",
                "animate-fade-up"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}