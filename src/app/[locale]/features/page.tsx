import { getTranslations, setRequestLocale } from 'next-intl/server';

const SECTION_KEYS = ['driving', 'ml', 'hardware'] as const;
const ITEM_KEYS: Record<string, string[]> = {
  driving: ['behavioral', 'endToEnd', 'realtime'],
  ml: ['tensorflow', 'pytorch', 'transfer'],
  hardware: ['raspberryPi', 'jetson', 'sensors'],
};

const ICON_MAP: Record<string, JSX.Element> = {
  play: <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />,
  arrows: <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />,
  bolt: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
  cube: <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />,
  fire: <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />,
  refresh: <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M20.015 4.652v4.992" />,
  cpu: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />,
  gpu: <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />,
  signal: <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12.75h.008v.008H12v-.008z" />,
};

export default async function FeaturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('featuresPage');

  return (
    <>
      <section className="px-4 pb-16 pt-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{t('hero.title')}</h1>
          <p className="mt-6 text-lg text-gray-400">{t('hero.subtitle')}</p>
        </div>
      </section>

      {SECTION_KEYS.map((sectionKey) => (
        <section key={sectionKey} className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-10 text-2xl font-bold text-white sm:text-3xl">
              {t(`sections.${sectionKey}.title`)}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ITEM_KEYS[sectionKey].map((itemKey) => {
                const iconName = t(`sections.${sectionKey}.items.${itemKey}.icon`);
                return (
                  <div
                    key={itemKey}
                    className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-orange-500/50 hover:bg-white/[0.07]"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition-colors group-hover:bg-orange-500/20">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        {ICON_MAP[iconName] ?? ICON_MAP.cube}
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {t(`sections.${sectionKey}.items.${itemKey}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {t(`sections.${sectionKey}.items.${itemKey}.description`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
