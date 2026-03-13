import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t('title')}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-gray-400 sm:text-xl">
          {t('subtitle')}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/getting-started"
            className="cursor-pointer rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40 hover:brightness-110"
          >
            {t('cta.primary')}
          </Link>
          <a
            href="https://github.com/autorope/donkeycar"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            {t('cta.secondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
