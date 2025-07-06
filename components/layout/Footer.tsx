'use client'

import Link from 'next/link'
import { useTranslation } from '@/components/providers/TranslationProvider'

export function Footer() {
  const { t, locale } = useTranslation()

  const footerSections = [
    {
      title: t('footer.company'),
      links: [
        { label: t('footer.about'), href: '#about' },
        { label: t('footer.careers'), href: '#careers' },
        { label: t('footer.partners'), href: '#partners' },
        { label: t('footer.press'), href: '#press' },
      ],
    },
    {
      title: t('footer.services'),
      links: [
        { label: t('footer.aiDevelopment'), href: '#ai-development' },
        { label: t('footer.consulting'), href: '#consulting' },
        { label: t('footer.dataEngineering'), href: '#data-engineering' },
        { label: t('footer.support'), href: '#support' },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('footer.blog'), href: '#blog' },
        { label: t('footer.caseStudies'), href: '#case-studies' },
        { label: t('footer.documentation'), href: '#docs' },
        { label: t('footer.contact'), href: '#contact' },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl text-white">TentenAI</span>
            </div>
            <p className="text-sm text-gray-400">
              Transforming businesses through innovative AI solutions.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">{t('footer.copyright')}</p>
            <div className="flex gap-6">
              <Link
                href={`/${locale}/privacy`}
                className="text-sm hover:text-white transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-sm hover:text-white transition-colors"
              >
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}