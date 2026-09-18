import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function About() {
  const { t } = useTranslation();
  return <main className="about-page"><div className="container narrow"><p className="eyebrow">{t('about.eyebrow')}</p><h1>{t('about.title')}</h1><p className="about-lead">{t('about.lead')}</p><Separator /><div className="about-grid"><Card><CardHeader><CardTitle>{t('about.does')}</CardTitle></CardHeader><CardContent><p>{t('about.doesText')}</p></CardContent></Card><Card><CardHeader><CardTitle>{t('about.doesNot')}</CardTitle></CardHeader><CardContent><p>{t('about.doesNotText')}</p></CardContent></Card></div><div className="about-note"><span>✓</span><p>{t('about.note')}</p></div></div></main>;
}
