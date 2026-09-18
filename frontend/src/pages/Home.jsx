import { Link } from 'react-router-dom';
import { FileText, Languages, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const { t } = useTranslation();
  const features = [[FileText, 'home.pdf', 'home.pdfText'], [Languages, 'home.terms', 'home.termsText'], [Sparkles, 'home.simple', 'home.simpleText']];
  const steps = [['01', 'home.upload', 'home.uploadText'], ['02', 'home.analyzeStep', 'home.analyzeText'], ['03', 'home.understand', 'home.understandText']];
  return <><Hero /><main><section className="feature-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">{t('home.featuresEyebrow')}</p><h2>{t('home.featuresTitle')}</h2></div><p className="section-intro">{t('home.featuresIntro')}</p></div><div className="feature-grid">{features.map(([Icon, title, description]) => <Card className="feature-card" key={title}><CardHeader><Icon className="feature-icon" /><CardTitle>{t(title)}</CardTitle></CardHeader><CardContent><p>{t(description)}</p></CardContent></Card>)}</div></div></section><section className="process-section" id="how-it-works"><div className="container process-grid"><div><p className="eyebrow light">{t('home.how')}</p><h2>{t('home.steps')}</h2><Button render={<Link to="/analyze" />} variant="secondary" className="mt-8">{t('home.analyze')}</Button></div><div className="process-steps">{steps.map(([number, title, copy]) => <div className="process-step" key={number}><span>{number}</span><div><h3>{t(title)}</h3><p>{t(copy)}</p></div></div>)}</div></div></section><section className="example-section"><div className="container example-grid"><div><p className="eyebrow">{t('home.example')}</p><h2>{t('home.simpleLabel')}</h2></div><Card className="example-card"><CardContent><div className="example-row"><span>{t('home.complex')}</span><p>“Mild hepatomegaly with diffuse fatty infiltration of the liver.”</p></div><Separator className="my-5" /><div className="example-row simple"><span>{t('home.simpleLabel')}</span><p>“The liver is slightly enlarged and contains more fat than normal.”</p></div></CardContent></Card></div></section><section className="safety-banner"><div className="container"><span className="shield">✓</span><div><strong>{t('home.safety')}</strong><p>{t('home.safetyText')}</p></div></div></section></main></>;
}
