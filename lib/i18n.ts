export const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  'zh-TW': { name: '繁體中文', flag: '🇹🇼' },
  ja: { name: '日本語', flag: '🇯🇵' },
  ko: { name: '한국어', flag: '🇰🇷' },
  'zh-CN': { name: '简体中文', flag: '🇨🇳' },
  ar: { name: 'العربية', flag: '🇸🇦' },
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'en';