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
  params: { locale: string }
}) {
  const translations = await getTranslations(params.locale)

  return (
    <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <TranslationProvider locale={params.locale} translations={translations}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}