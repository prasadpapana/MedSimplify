import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Languages, Sparkles, Stethoscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import HomeMedicalAI from '../components/illustrations/HomeMedicalAI';
import HowItWorksIsometric from '../components/illustrations/HowItWorksIsometric';
import LanguageIllustration from '../components/illustrations/LanguageIllustration';
import SafetyIllustration from '../components/illustrations/SafetyIllustration';

export default function Home() {
  const { t } = useTranslation();

  const features = [
    { Icon: Languages, title: 'Simplify Medical Language', description: 'Turn medical notes into everyday language that is easier to understand.' },
    { Icon: Sparkles, title: 'Explain Medical Terms', description: 'Get plain-language definitions for technical words and phrases in your report.' },
    { Icon: FileText, title: 'Extract Key Findings', description: 'Highlight the core points and important clinical details in a clear summary.' }
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-[#D7E4F0] bg-[#F3F8FD]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              {t('home.eyebrow')}
            </p>

            <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[3.6rem]">
              {t('home.title')}
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              {t('home.description')}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="h-11 border-[#0B2A4A] bg-[#0B2A4A] px-6 text-white hover:border-[#2563EB] hover:bg-[#2563EB]">
                <Link to="/analyze">{t('home.analyze')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 border-[#D8E3EF] bg-white px-6 text-[#0B2A4A] hover:bg-[#E8F2FF]">
                <Link to="/signup">{t('auth.signupTitle')}</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-11 border-slate-200 bg-white px-6 text-slate-900">
                <Link to="/#how-it-works">{t('home.how')}</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Clear explanations
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Better understanding
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl">
              <HomeMedicalAI className="w-full drop-shadow-[0_22px_32px_rgba(37,99,235,0.12)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">{t('home.featuresEyebrow')}</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">{t('home.featuresTitle')}</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600">{t('home.featuresIntro')}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map(({ Icon, title, description }) => (
            <Card key={title} className="border-slate-200 bg-white shadow-none transition hover:border-slate-300 hover:bg-slate-50">
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl text-slate-950">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-slate-600">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-[#EAF3FB] text-[#0B2A4A]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">{t('home.how')}</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#0B2A4A] sm:text-4xl">{t('home.steps')}</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
              Follow a simple process from upload to understanding so you can focus on the information that matters.
            </p>
            <div className="mt-8">
              <Button asChild variant="secondary" className="h-11 px-6">
                <Link to="/analyze" className="inline-flex items-center gap-2">
                  {t('home.analyze')} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[24px] border border-[#D7E4F0] bg-white/80 p-4 shadow-[0_16px_32px_rgba(37,99,235,0.08)]">
              <HowItWorksIsometric className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="rounded-[28px] border border-sky-100 bg-sky-50/60 p-4 shadow-[0_12px_25px_rgba(37,99,235,0.06)] sm:p-6">
            <LanguageIllustration className="w-full" />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Languages</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Understand your report in your language.</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
              MedSimplify adapts the explanation to the language you prefer, helping you understand clinical notes without losing clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">{t('home.example')}</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">{t('home.simpleLabel')}</h2>
          </div>

          <Card className="border-slate-200 bg-white shadow-none">
            <CardContent className="space-y-5 p-6">
              <div className="space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{t('home.complex')}</p>
                <p className="text-base leading-7 text-slate-700">
                  “Mild hepatomegaly with diffuse fatty infiltration of the liver.”
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700">{t('home.simpleLabel')}</p>
                <p className="text-base leading-7 text-slate-700">
                  “The liver is slightly enlarged and contains more fat than normal.”
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-[#D7E4F0] bg-[#F3F8FD]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-slate-700 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-100 bg-white shadow-[0_12px_24px_rgba(37,99,235,0.07)]">
              <SafetyIllustration className="h-12 w-12" />
            </div>
            <div>
              <p className="font-semibold text-slate-950">{t('home.safety')}</p>
              <p className="text-sm text-slate-600">{t('home.safetyText')}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
            <Stethoscope className="h-4 w-4 text-sky-700" />
            Support for clearer conversations with your care team
          </div>
        </div>
      </section>
    </main>
  );
}
