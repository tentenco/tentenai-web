'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { Button } from '@/components/ui/Button'
import { useTranslation } from '@/components/providers/TranslationProvider'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const { t, locale } = useTranslation()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: `/${locale}#services`, label: t('nav.services') },
    { href: `/${locale}#industries`, label: t('nav.industries') },
    { href: `/${locale}#case-studies`, label: t('nav.caseStudies') },
    { href: `/${locale}#about`, label: t('nav.about') },
    { href: `/${locale}#contact`, label: t('nav.contact') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl">TentenAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    "hover:text-accent",
                    pathname === item.href ? "text-accent" : "text-gray-700"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <LanguageSwitcher currentLocale={locale} />
              <Button size="sm">{t('nav.getStarted')}</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors py-2",
                    "hover:text-accent",
                    pathname === item.href ? "text-accent" : "text-gray-700"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
                <LanguageSwitcher currentLocale={locale} />
                <Button size="sm" className="w-full">{t('nav.getStarted')}</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}