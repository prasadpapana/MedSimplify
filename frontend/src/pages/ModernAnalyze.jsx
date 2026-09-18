import { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, FileText, Globe2, LoaderCircle, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import UploadBox from '../components/UploadBox';
import TextInput from '../components/TextInput';
import ModernResult from '../components/ModernResult';
import AnalyzeLineArt from '../components/illustrations/AnalyzeLineArt';
import { simplifyText, uploadPdf } from '../services/api';
import { languages } from '../i18n/config';

export default function ModernAnalyze() {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [outputLanguage, setOutputLanguage] = useState('en');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const selectFile = (candidate) => {
    setError('');
    if (!candidate) return setFile(null);
    if (candidate.type !== 'application/pdf' && !candidate.name.toLowerCase().endsWith('.pdf')) return setError(t('analyze.pdfOnly'));
    if (candidate.size > 10 * 1024 * 1024) return setError(t('analyze.pdfOnly'));
    setFile(candidate);
    setText('');
  };

  const analyze = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      setResult(file ? await uploadPdf(file, outputLanguage) : await simplifyText(text.trim(), outputLanguage));
    } catch (requestError) {
      setError(requestError.response?.data?.error || (requestError.code === 'ECONNABORTED' ? 'The request took too long. Please try again.' : t('analyze.error')));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setText('');
    setFile(null);
    setError('');
  };

  if (result) {
    return (
      <main className="min-h-[calc(100vh-4rem)] bg-[#F3F8FD] px-4 py-10 sm:px-6 lg:py-14">
        <ModernResult result={result} onReset={reset} />
      </main>
    );
  }

  const selectedLanguage = languages.find((language) => language.code === outputLanguage)?.label || 'English';

  return (
    <main className="relative min-h-[calc(100vh-4rem)] bg-[#f4f8fc] px-4 py-10 sm:px-6 lg:py-14">
      <div className="pointer-events-none absolute right-4 top-8 hidden w-36 opacity-55 xl:block" aria-hidden="true">
        <AnalyzeLineArt className="w-full" />
      </div>
      <div className="mx-auto flex w-full max-w-[820px] flex-col items-center">
        <div className="mb-7 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-sm font-medium text-sky-700">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
              <FileText className="h-4 w-4" />
            </span>
            <span>Report Analysis</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">Analyze Your Medical Report</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Upload a medical report or paste the text to get a simpler explanation.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-[#edf8ff] px-3 py-1.5 text-sm font-medium text-sky-800">
            <CheckCircle2 className="h-4 w-4" />
            PDF and text reports are supported.
          </div>
        </div>

        <form onSubmit={analyze} className="w-full rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(17,24,39,0.07)] sm:p-8">
          <div className="space-y-3">
            <Label className="text-base font-semibold text-slate-800">{t('analyze.uploadTitle')}</Label>
            <UploadBox file={file} onFile={selectFile} disabled={loading} />
          </div>

          <div className="my-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            <span className="h-px flex-1 bg-slate-200" />
            <span>OR</span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <TextInput
            value={text}
            onChange={(value) => {
              setText(value);
              setFile(null);
              setError('');
            }}
            disabled={loading}
          />

          <div className="mt-7 space-y-2">
            <Label htmlFor="output-language" className="text-base font-semibold text-slate-800">Output Language</Label>
            <Select value={outputLanguage} onValueChange={setOutputLanguage}>
              <SelectTrigger id="output-language" className="h-12 w-full rounded-xl border-slate-200 bg-white text-slate-700">
                <SelectValue>
                  <Globe2 className="h-4 w-4 text-sky-700" />
                  {selectedLanguage}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language.code} value={language.code}>{language.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {error && (
            <Alert variant="destructive" className="mt-5">
              <AlertCircle className="h-4 w-4" />
              <div className="space-y-1">
                <AlertTitle>{t('analyze.important')}</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </div>
            </Alert>
          )}

          <Button type="submit" disabled={(!file && !text.trim()) || loading} className="mt-7 h-12 w-full rounded-xl bg-[#102b46] text-base font-semibold text-white shadow-none hover:bg-[#183d61] disabled:opacity-80">
            {loading ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" />{t('analyze.analyzing')}</> : <>Analyze Report<ArrowRight className="ml-2 h-4 w-4" /></>}
          </Button>

          {loading && (
            <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50/60 p-3">
              <div className="flex items-center gap-2 text-sm font-medium text-sky-800"><LoaderCircle className="h-4 w-4 animate-spin" />{t('analyze.analyzing')}</div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-sky-100"><div className="h-full w-[65%] rounded-full bg-sky-600" /></div>
            </div>
          )}
        </form>

        <div className="mt-5 flex w-full items-start gap-3 rounded-2xl border border-sky-200 bg-[#f1fbff] p-4 text-slate-700">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700"><ShieldCheck className="h-4 w-4" /></div>
          <div>
            <p className="text-sm font-semibold text-slate-800">For informational purposes only</p>
            <p className="text-xs leading-5 text-slate-600">This tool simplifies medical language to help users understand reports. It does not provide a diagnosis or treatment recommendation.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
