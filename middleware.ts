import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { languages, defaultLanguage } from './lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = Object.keys(languages).every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    
    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

function getLocale(request: NextRequest): string {
  // Get locale from cookie if exists
  const localeCookie = request.cookies.get('locale')
  if (localeCookie && Object.keys(languages).includes(localeCookie.value)) {
    return localeCookie.value
  }

  // Get locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const locales = acceptLanguage.split(',').map(lang => {
      const parts = lang.trim().split(';')
      return parts[0].split('-')[0]
    })
    
    for (const locale of locales) {
      if (Object.keys(languages).includes(locale)) {
        return locale
      }
    }
  }

  return defaultLanguage
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}