'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggleLocale() {
    const next = locale === 'en' ? 'zh' : 'en';
    router.replace(pathname, { locale: next });
  }

  return (
    <button
      onClick={toggleLocale}
      className="cursor-pointer rounded-lg border border-white/20 px-3 py-1.5 text-sm font-medium transition-colors hover:border-orange-500 hover:text-orange-400"
      aria-label="Switch language"
    >
      {locale === 'en' ? '中文' : 'EN'}
    </button>
  );
}
