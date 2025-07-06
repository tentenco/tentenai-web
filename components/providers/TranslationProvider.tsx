'use client'

import React, { createContext, useContext } from 'react'

interface TranslationContextType {
  locale: string
  t: (key: string) => string
  translations: any
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({
  children,
  locale,
  translations,
}: {
  children: React.ReactNode
  locale: string
  translations: any
}) {
  const t = (key: string) => {
    const keys = key.split('.')
    let value = translations
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return (
    <TranslationContext.Provider value={{ locale, t, translations }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}