import { useTranslations } from 'next-intl';

export default function GettingStartedPage() {
  const t = useTranslations('gettingStartedPage');

  return (
    <>
      <section className="px-4 pb-16 pt-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{t('hero.title')}</h1>
          <p className="mt-6 text-lg text-gray-400">{t('hero.subtitle')}</p>
        </div>
      </section>

      <InstallationSection />
      <HardwareSection />
      <SoftwareSection />
      <FirstModelSection />
    </>
  );
}

function InstallationSection() {
  const t = useTranslations('gettingStartedPage.sections.installation');
  const steps: string[] = [
    t('steps.0'),
    t('steps.1'),
    t('steps.2'),
    t('steps.3'),
  ];

  return (
    <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t('title')}</h2>
        <p className="mt-4 text-gray-400">{t('description')}</p>
        <ol className="mt-8 space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-sm font-bold text-orange-400">
                {i + 1}
              </span>
              <span className="pt-1 text-sm text-gray-300">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function HardwareSection() {
  const t = useTranslations('gettingStartedPage.sections.hardware');
  const items: string[] = [
    t('items.0'),
    t('items.1'),
    t('items.2'),
    t('items.3'),
    t('items.4'),
  ];

  return (
    <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t('title')}</h2>
        <p className="mt-4 text-gray-400">{t('description')}</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SoftwareSection() {
  const t = useTranslations('gettingStartedPage.sections.software');
  const steps: string[] = [
    t('steps.0'),
    t('steps.1'),
    t('steps.2'),
    t('steps.3'),
  ];

  return (
    <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t('title')}</h2>
        <p className="mt-4 text-gray-400">{t('description')}</p>
        <ol className="mt-8 space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-sm font-bold text-orange-400">
                {i + 1}
              </span>
              <span className="pt-1 text-sm text-gray-300">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FirstModelSection() {
  const t = useTranslations('gettingStartedPage.sections.firstModel');
  const steps: string[] = [
    t('steps.0'),
    t('steps.1'),
    t('steps.2'),
    t('steps.3'),
  ];

  return (
    <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t('title')}</h2>
        <p className="mt-4 text-gray-400">{t('description')}</p>
        <ol className="mt-8 space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-sm font-bold text-orange-400">
                {i + 1}
              </span>
              <span className="pt-1 text-sm text-gray-300">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
