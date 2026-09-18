import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function TextInput({ value, onChange, disabled }) {
  return <div className="text-input-wrap"><Label htmlFor="report-text">Or paste your report text</Label><Textarea id="report-text" value={value} onChange={(event) => onChange(event.target.value)} disabled={disabled} placeholder="Paste your medical report here..." maxLength={100000} /><div className="input-meta"><span>We only explain the language in your report.</span><span>{value.length.toLocaleString()} / 100,000</span></div></div>;
}
