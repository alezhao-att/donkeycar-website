import { useTranslations } from 'next-intl';

const SECTION_KEYS = ['api', 'tutorials', 'faq'] as const;
const ITEM_KEYS: Record<string, string[]> = {
  api: ['vehicle', 'parts', 'training'],
  tutorials: ['firstCar', 'firstModel', 'simulator'],
  faq: ['hardware', 'cost', 'experience'],
};

const SECTION_ICONS: Record<string, JSX.Element> = {
  api: <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />,
  tutorials: <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />,
  faq: <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />,
};

export default function DocsPage() {
  const t = useTranslations('docs');

  return (
    <>
      <section className="px-4 pb-16 pt-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{t('title')}</h1>
          <p className="mt-6 text-lg text-gray-400">{t('subtitle')}</p>
        </div>
      </section>

      {SECTION_KEYS.map((sectionKey) => (
        <section key={sectionKey} className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  {SECTION_ICONS[sectionKey]}
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">{t(`sections.${sectionKey}.title`)}</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ITEM_KEYS[sectionKey].map((itemKey) => (
                <div
                  key={itemKey}
                  className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-orange-500/50 hover:bg-white/[0.07]"
                >
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {t(`sections.${sectionKey}.items.${itemKey}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {t(`sections.${sectionKey}.items.${itemKey}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
