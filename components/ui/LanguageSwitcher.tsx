'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { languages } from '@/lib/i18n'
import { ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split('/')
    segments[1] = locale
    const newPath = segments.join('/')
    
    // Set cookie for persistence
    document.cookie = `locale=${locale};path=/;max-age=31536000`
    
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm font-medium",
          "text-gray-700 hover:text-gray-900 transition-colors",
          "border border-gray-200 rounded-lg hover:border-gray-300",
          "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        )}
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span>{languages[currentLocale as keyof typeof languages].name}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className={cn(
          "absolute right-0 mt-2 w-56",
          "bg-white rounded-lg shadow-lg border border-gray-200",
          "py-1 z-50 animate-fade-in"
        )}>
          {Object.entries(languages).map(([locale, { name, flag }]) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={cn(
                "w-full px-4 py-2 text-left text-sm",
                "hover:bg-gray-50 transition-colors",
                "flex items-center gap-3",
                currentLocale === locale && "bg-accent-light text-accent font-medium"
              )}
            >
              <span className="text-xl">{flag}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}