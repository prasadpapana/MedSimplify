import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, FileText, ShieldCheck } from 'lucide-react';
import AboutAbstractAI from '../components/illustrations/AboutAbstractAI';

export default function About() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#F3F8FD]">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">{t('about.eyebrow')}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              {t('about.title')}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{t('about.lead')}</p>
          </div>
          <div className="w-full max-w-md">
            <AboutAbstractAI className="w-full" />
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-slate-200 bg-white shadow-none">
            <CardHeader className="pb-3">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                <FileText className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl text-slate-950">{t('about.does')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-slate-600">{t('about.doesText')}</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white shadow-none">
            <CardHeader className="pb-3">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl text-slate-950">{t('about.doesNot')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-slate-600">{t('about.doesNotText')}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-slate-700">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
          <p className="leading-7">{t('about.note')}</p>
        </div>
      </div>
    </main>
  );
}
