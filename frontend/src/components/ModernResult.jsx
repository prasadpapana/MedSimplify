import { useState } from 'react';
import { Download, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ResultsMedicalIllustration from './illustrations/ResultsMedicalIllustration';

export default function ModernResult({ result, onReset }) {
  const { t } = useTranslation();
  const keyFindings = result.keyFindings || [];
  const medicalTerms = result.medicalTerms || [];

  const downloadResult = () => {
    const content = `MedSimplify report\n\n${t('result.simpleExplanation')}\n${result.simplifiedText}\n\n${t('result.keyFindings')}\n${keyFindings.join('\n')}\n\n${t('result.medicalTerms')}\n${medicalTerms.map((item) => `${item.term}: ${item.meaning}`).join('\n')}\n\n${result.originalText}`;
    const url = URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'medsimplify-result.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-5xl" aria-live="polite">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-medium text-primary">{t('result.eyebrow')}</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('result.title')}</h1>
        </div>

        <Button variant="outline" onClick={onReset}>
          <RotateCcw className="mr-2 h-4 w-4" />
          {t('result.another')}
        </Button>
      </div>

      <div className="mb-6 flex justify-center lg:justify-start">
        <ResultsMedicalIllustration className="w-full max-w-[420px]" />
      </div>

      <div className="flex flex-col gap-6">
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Badge>{t('result.simpleExplanation')}</Badge>
            </div>
            <CardTitle className="text-xl leading-8">{result.simplifiedText}</CardTitle>
            <CardDescription>{t('result.disclaimer')}</CardDescription>
          </CardHeader>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold">{t('result.keyFindings')}</h2>
              <Badge variant="outline">{keyFindings.length}</Badge>
            </div>

            <div className="flex flex-col gap-3">
              {keyFindings.map((finding, index) => (
                <Card key={`${finding}-${index}`}>
                  <CardContent className="flex gap-3 pt-6">
                    <Badge variant="secondary">{String(index + 1).padStart(2, '0')}</Badge>
                    <p className="text-sm leading-6">{finding}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold">{t('result.medicalTerms')}</h2>
              <Badge variant="outline">{medicalTerms.length}</Badge>
            </div>

            <div className="grid gap-3">
              {medicalTerms.length ? (
                medicalTerms.map((item) => (
                  <Card key={item.term}>
                    <CardHeader className="gap-1">
                      <CardDescription>{t('result.term')}</CardDescription>
                      <CardTitle className="text-base">{item.term}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-muted-foreground">{item.meaning}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">{t('result.empty')}</p>
              )}
            </div>
          </section>
        </div>

        <Separator />

        <Accordion type="single" collapsible className="rounded-xl border bg-card">
          <AccordionItem value="original">
            <AccordionTrigger className="px-5 py-4 text-left text-sm font-medium">
              {t('result.originalText')}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5">
              <pre className="whitespace-pre-wrap rounded-lg bg-muted/40 p-4 text-sm leading-6 text-muted-foreground">
                {result.originalText}
              </pre>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {result.error && (
          <Alert variant="destructive">
            <AlertDescription>{result.error}</AlertDescription>
          </Alert>
        )}

        <div className="mt-4 flex flex-wrap gap-3">
          <Button variant="outline" onClick={downloadResult}>
            <Download className="mr-2 h-4 w-4" />
            {t('result.download')}
          </Button>
          <Button onClick={onReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            {t('result.another')}
          </Button>
        </div>
      </div>
    </div>
  );
}
