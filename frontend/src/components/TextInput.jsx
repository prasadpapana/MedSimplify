import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function TextInput({ value, onChange, disabled }) {
  return (
    <div className="space-y-3">
      <Label htmlFor="report-text" className="text-base font-medium text-slate-700">
        Paste your medical report
      </Label>
      <Textarea
        id="report-text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        placeholder="Paste the medical report text here..."
        maxLength={100000}
        className="min-h-[220px] resize-none rounded-xl border-slate-200 bg-white text-base leading-7 text-slate-700 placeholder:text-slate-400"
      />
      <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
        <span>We only explain the language in your report.</span>
        <span>{value.length.toLocaleString()} characters</span>
      </div>
    </div>
  );
}
