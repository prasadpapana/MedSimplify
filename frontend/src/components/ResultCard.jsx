import { useState } from 'react';
import { Download, FileText, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import MedicalTermCard from './MedicalTermCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function ResultCard({ result, onReset }) {
  const { t } = useTranslation();
  const [showOriginal, setShowOriginal] = useState(false);
  const downloadResult = () => {
    const content = `MedSimplify report\n\n${t('result.simpleExplanation')}\n${result.simplifiedText}\n\n${t('result.keyFindings')}\n${result.keyFindings.join('\n')}\n\n${t('result.medicalTerms')}\n${result.medicalTerms.map((item) => `${item.term}: ${item.meaning}`).join('\n')}\n\n${result.originalText}`;
    const url = URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
    const link = document.createElement('a'); link.href = url; link.download = 'medsimplify-result.txt'; link.click(); URL.revokeObjectURL(url);
  };
  return <section className="results-section" aria-live="polite"><div className="section-heading result-heading"><div><p className="eyebrow">{t('result.eyebrow')}</p><h2>{t('result.title')}</h2></div><Button variant="outline" onClick={onReset}><RotateCcw data-icon="inline-start" />{t('result.another')}</Button></div><Card className="simple-card"><CardHeader><Badge variant="secondary">{t('result.simpleExplanation')}</Badge></CardHeader><CardContent><p>{result.simplifiedText}</p></CardContent></Card><div className="results-columns"><div><h3>{t('result.keyFindings')} <Badge variant="outline">{result.keyFindings.length}</Badge></h3>{result.keyFindings.map((finding, index) => <Card className="finding" key={`${finding}-${index}`}><CardContent><Badge variant="secondary">{String(index + 1).padStart(2, '0')}</Badge><p>{finding}</p></CardContent></Card>)}</div><div><h3>{t('result.medicalTerms')} <Badge variant="outline">{result.medicalTerms.length}</Badge></h3><div className="terms-grid">{result.medicalTerms.length ? result.medicalTerms.map((item) => <MedicalTermCard key={item.term} {...item} />) : <p className="muted">{t('result.empty')}</p>}</div></div></div><Separator className="my-8" /><Accordion type="single" collapsible value={showOriginal ? 'original' : ''} onValueChange={(value) => setShowOriginal(value === 'original')}><AccordionItem value="original"><AccordionTrigger><FileText /> {t('result.original')}</AccordionTrigger><AccordionContent><pre>{result.originalText}</pre></AccordionContent></AccordionItem></Accordion><div className="result-actions"><Button onClick={downloadResult}><Download data-icon="inline-start" />{t('result.download')}</Button><Button variant="ghost" onClick={onReset}>{t('result.another')}</Button></div><Alert className="safety-note"><AlertDescription>{t('result.disclaimer')}</AlertDescription></Alert></section>;
}
