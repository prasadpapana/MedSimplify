import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle, LoaderCircle } from 'lucide-react';
import UploadBox from '../components/UploadBox';
import TextInput from '../components/TextInput';
import ResultCard from '../components/ResultCard';
import { simplifyText, uploadPdf } from '../services/api';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { languages } from '../i18n/config';

export default function Analyze() {
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
    if (candidate.type !== 'application/pdf' && !candidate.name.toLowerCase().endsWith('.pdf')) return setError('Only PDF files are supported.');
    if (candidate.size > 10 * 1024 * 1024) return setError('PDF files must be smaller than 10 MB.');
    setFile(candidate); setText('');
  };
  const analyze = async (event) => {
    event.preventDefault(); setError(''); setLoading(true);
    try { setResult(file ? await uploadPdf(file, outputLanguage) : await simplifyText(text.trim(), outputLanguage)); } catch (requestError) { setError(requestError.response?.data?.error || (requestError.code === 'ECONNABORTED' ? 'The request took too long. Please try again.' : t('analyze.error'))); } finally { setLoading(false); }
  };
  const reset = () => { setResult(null); setText(''); setFile(null); setError(''); };
  if (result) return <main className="analyze-page"><div className="container"><ResultCard result={result} onReset={reset} /></div></main>;
  return <main className="analyze-page"><div className="container"><div className="analysis-intro"><p className="eyebrow">{t('analyze.eyebrow')}</p><h1>{t('analyze.title')}</h1><p>{t('analyze.description')}</p></div><form className="analysis-form" onSubmit={analyze}><Tabs defaultValue="upload" className="analysis-tabs"><TabsList><TabsTrigger value="upload">{t('analyze.uploadTitle')}</TabsTrigger><TabsTrigger value="paste">{t('analyze.pasteTitle')}</TabsTrigger></TabsList><TabsContent value="upload"><Card><CardHeader><CardTitle>{t('analyze.uploadTitle')}</CardTitle><CardDescription>{t('analyze.uploadDescription')}</CardDescription></CardHeader><CardContent><UploadBox file={file} onFile={selectFile} disabled={loading} /></CardContent></Card></TabsContent><TabsContent value="paste"><Card><CardHeader><CardTitle>{t('analyze.pasteTitle')}</CardTitle><CardDescription>{t('analyze.pasteDescription')}</CardDescription></CardHeader><CardContent><TextInput value={text} onChange={(value) => { setText(value); setFile(null); setError(''); }} disabled={loading} /></CardContent></Card></TabsContent></Tabs><div className="output-language"><Label htmlFor="output-language">{t('analyze.outputLanguage')}</Label><Select value={outputLanguage} onValueChange={setOutputLanguage}><SelectTrigger id="output-language"><SelectValue /></SelectTrigger><SelectContent>{languages.map((language) => <SelectItem key={language.code} value={language.code}>{language.label}</SelectItem>)}</SelectContent></Select></div>{error && <Alert variant="destructive"><AlertCircle /><AlertTitle>{t('analyze.important')}</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>}<div className="form-submit"><Button type="submit" size="lg" disabled={(!file && !text.trim()) || loading}>{loading ? <><LoaderCircle className="animate-spin" /> {t('analyze.analyzing')}</> : t('analyze.simplify')}</Button><span>{t('analyze.privacy')}</span></div>{loading && <Progress value={65} aria-label={t('analyze.analyzing')} />}</form><Alert className="analysis-safety"><AlertCircle /><AlertDescription><strong>{t('analyze.important')}</strong> {t('analyze.safety')}</AlertDescription></Alert></div></main>;
}
