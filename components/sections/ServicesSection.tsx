'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslation } from '@/components/providers/TranslationProvider'
import { 
  Sparkles, 
  Brain, 
  Eye, 
  MessageSquare, 
  Database, 
  Lightbulb,
  ArrowRight 
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
    <section id="services" className="py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(services).map(([key, service], index) => {
            const Icon = serviceIcons[key as keyof typeof serviceIcons]
            
            return (
              <Card 
                key={key} 
                className={cn(
                  "group relative overflow-hidden border-muted hover:border-foreground/20 transition-all duration-300",
                  "hover:shadow-lg"
                )}
              >
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
                
                {/* Hover gradient effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-primary/0 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}