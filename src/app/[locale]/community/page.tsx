import { getTranslations, setRequestLocale } from 'next-intl/server';

const SECTION_KEYS = ['github', 'discord', 'contribute', 'events'] as const;
const SECTION_URLS: Record<string, string> = {
  github: 'https://github.com/autorope/donkeycar',
  discord: 'https://discord.gg/donkeycar',
  contribute: 'https://github.com/autorope/donkeycar/blob/main/CONTRIBUTING.md',
  events: 'https://www.donkeycar.com/events',
};

const SECTION_ICONS: Record<string, JSX.Element> = {
  github: (
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  ),
  discord: (
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  ),
  contribute: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  ),
  events: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0" />
  ),
};

export default async function CommunityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('communityPage');
  const stats = await getTranslations('community.stats');

  return (
    <>
      <section className="px-4 pb-16 pt-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{t('hero.title')}</h1>
          <p className="mt-6 text-lg text-gray-400">{t('hero.subtitle')}</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-8">
          <StatItem value={stats('builders')} label={stats('buildersLabel')} />
          <StatItem value={stats('stars')} label={stats('starsLabel')} />
          <StatItem value={stats('contributors')} label={stats('contributorsLabel')} />
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2">
          {SECTION_KEYS.map((key) => {
            const isStroke = key === 'contribute' || key === 'events';
            return (
              <div
                key={key}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-orange-500/50 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition-colors group-hover:bg-orange-500/20">
                  <svg
                    className="h-7 w-7"
                    fill={isStroke ? 'none' : 'currentColor'}
                    viewBox="0 0 24 24"
                    stroke={isStroke ? 'currentColor' : 'none'}
                    strokeWidth={isStroke ? 1.5 : 0}
                  >
                    {SECTION_ICONS[key]}
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{t(`sections.${key}.title`)}</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">{t(`sections.${key}.description`)}</p>
                <a
                  href={SECTION_URLS[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-2 text-sm font-medium text-orange-400 transition-colors hover:text-orange-300"
                >
                  {t(`sections.${key}.cta`)}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
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
