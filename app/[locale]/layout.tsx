import { Inter } from 'next/font/google'
import { TranslationProvider } from '@/components/providers/TranslationProvider'
import { languages } from '@/lib/i18n'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return Object.keys(languages).map((locale) => ({ locale }))
}

async function getTranslations(locale: string) {
  try {
    const translations = await import(`@/locales/${locale}/common.json`)
    return translations.default
  } catch (error) {
    const translations = await import(`@/locales/en/common.json`)
    return translations.default
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const translations = await getTranslations(locale)

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <TranslationProvider locale={locale} translations={translations}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}