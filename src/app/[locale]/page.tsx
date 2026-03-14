import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { Link } from '@/i18n/routing';

const FEATURE_KEYS = ['autonomousDriving', 'machineLearning', 'hardwareFlexibility', 'openSourceCommunity'] as const;
const STEP_KEYS = ['install', 'build', 'train', 'drive'] as const;

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return (
    <>
      <Hero />
      <FeaturesPreview locale={locale} />
      <GettingStartedPreview locale={locale} />
      <CommunityStats locale={locale} />
    </>
  );
}

async function FeaturesPreview({ locale }: { locale: string }) {
  setRequestLocale(locale);
  const t = await getTranslations('features');

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t('title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">{t('subtitle')}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_KEYS.map((key) => (
            <FeatureCard
              key={key}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.description`)}
              icon={t(`items.${key}.icon`) as 'car' | 'brain' | 'chip' | 'users'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

async function GettingStartedPreview({ locale }: { locale: string }) {
  setRequestLocale(locale);
  const t = await getTranslations('gettingStarted');

  return (
    <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t('title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">{t('subtitle')}</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEP_KEYS.map((key) => (
            <div key={key} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-4xl font-bold text-orange-500/30">{t(`steps.${key}.number`)}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{t(`steps.${key}.title`)}</h3>
              <p className="mt-2 text-sm text-gray-400">{t(`steps.${key}.description`)}</p>
              <code className="mt-4 block rounded-lg bg-black/50 px-3 py-2 font-mono text-xs text-orange-400">
                {t(`steps.${key}.code`)}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function CommunityStats({ locale }: { locale: string }) {
  setRequestLocale(locale);
  const t = await getTranslations('community');

  return (
    <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{t('title')}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">{t('subtitle')}</p>
        <div className="mt-12 grid grid-cols-3 gap-8">
          <StatItem value={t('stats.builders')} label={t('stats.buildersLabel')} />
          <StatItem value={t('stats.stars')} label={t('stats.starsLabel')} />
          <StatItem value={t('stats.contributors')} label={t('stats.contributorsLabel')} />
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/autorope/donkeycar"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full bg-white/10 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            {t('links.github')}
          </a>
          <a
            href="https://discord.gg/donkeycar"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full bg-white/10 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            {t('links.discord')}
          </a>
          <Link
            href="/community"
            className="cursor-pointer rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110"
          >
            {t('links.contribute')}
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-orange-400 sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </div>
  );
}
