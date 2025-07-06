'use client'

import { Section, SectionHeader } from '@/components/ui/Section'
import { useTranslation } from '@/components/providers/TranslationProvider'
import { 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Factory, 
  Code, 
  GraduationCap, 
  Building, 
  Truck 
} from 'lucide-react'
import { cn } from '@/lib/utils'

const industryIcons = {
  healthcare: Heart,
  finance: DollarSign,
  retail: ShoppingCart,
  manufacturing: Factory,
  technology: Code,
  education: GraduationCap,
  realestate: Building,
  logistics: Truck,
}

export function IndustriesSection() {
  const { t } = useTranslation()
  const industries = t('industries.items') as any as Record<string, string>

  return (
    <Section id="industries">
      <SectionHeader
        title={t('industries.title')}
        subtitle={t('industries.subtitle')}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(industries).map(([key, label], index) => {
          const Icon = industryIcons[key as keyof typeof industryIcons]
          
          return (
            <div
              key={key}
              className={cn(
                "group relative bg-white rounded-xl p-6 text-center",
                "border border-gray-200 hover:border-accent transition-all duration-300",
                "hover:shadow-lg hover:-translate-y-1",
                "animate-fade-up cursor-pointer"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-light transition-colors">
                <Icon className="w-8 h-8 text-gray-700 group-hover:text-accent transition-colors" />
              </div>

              {/* Label */}
              <h3 className="text-sm font-medium text-gray-900">
                {label}
              </h3>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 rounded-xl transition-opacity" />
            </div>
          )
        })}
      </div>
    </Section>
  )
}