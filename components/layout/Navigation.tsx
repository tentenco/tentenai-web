'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/components/providers/TranslationProvider'
import { cn } from '@/lib/utils'
import { Menu, X, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { languages } from '@/lib/i18n'
import { useRouter } from 'next/navigation'

export function Navigation() {
  const { t, locale } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: `/${locale}#services`, label: t('nav.services') },
    { href: `/${locale}#industries`, label: t('nav.industries') },
    { href: `/${locale}#case-studies`, label: t('nav.caseStudies') },
    { href: `/${locale}#about`, label: t('nav.about') },
    { href: `/${locale}#contact`, label: t('nav.contact') },
  ]

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`
    router.push(newPath)
  }

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b" 
        : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href={`/${locale}`} className="mr-6 flex items-center space-x-2">
          <div className={cn(
            "h-8 w-8 rounded-lg flex items-center justify-center transition-colors",
            isScrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
          )}>
            <span className={cn(
              "font-bold text-lg",
              isScrolled ? "text-primary-foreground" : "text-white"
            )}>T</span>
          </div>
          <span className={cn(
            "hidden font-bold text-xl sm:inline-block transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}>
            TentenAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors",
                  isScrolled 
                    ? pathname === item.href 
                      ? "text-foreground" 
                      : "text-foreground/60 hover:text-foreground/80"
                    : pathname === item.href
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  {languages[locale as keyof typeof languages].name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {Object.entries(languages).map(([code, { name, flag }]) => (
                  <DropdownMenuItem
                    key={code}
                    onClick={() => handleLanguageChange(code)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{flag}</span>
                    {name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button size="sm">{t('nav.getStarted')}</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-foreground/60 hover:text-foreground md:hidden"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/60 hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 space-y-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Globe className="h-4 w-4 mr-2" />
                    {languages[locale as keyof typeof languages].name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {Object.entries(languages).map(([code, { name, flag }]) => (
                    <DropdownMenuItem
                      key={code}
                      onClick={() => handleLanguageChange(code)}
                      className="cursor-pointer"
                    >
                      <span className="mr-2">{flag}</span>
                      {name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" className="w-full">{t('nav.getStarted')}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}