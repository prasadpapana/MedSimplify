import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, UploadCloud, X } from 'lucide-react';

export default function UploadBox({ file, onFile, disabled }) {
  const inputRef = useRef(null);

  const handleChange = (event) => onFile(event.target.files?.[0] || null);

  const handleDrop = (event) => {
    event.preventDefault();
    if (!disabled) onFile(event.dataTransfer.files?.[0] || null);
  };

  if (file) {
    return (
      <div className="rounded-[18px] border border-[#D7E4F0] bg-[#F8FBFF] p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-base font-medium text-slate-900">{file.name}</p>
              <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                <Badge variant="secondary">PDF</Badge>
                <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline" size="sm" onClick={() => inputRef.current?.click()} disabled={disabled}>
              Change File
            </Button>
            <Button type="button" variant="destructive" size="sm" onClick={() => onFile(null)}>
              <X className="mr-2 h-4 w-4" />
              Remove
            </Button>
          </div>
        </div>
        <input ref={inputRef} type="file" accept="application/pdf,.pdf" onChange={handleChange} hidden />
      </div>
    );
  }

  return (
    <div
      className="group rounded-[18px] border-2 border-dashed border-[#BFDDF8] bg-[#F8FBFF] p-6 text-center transition-all duration-200 hover:border-[#93C5FD] hover:bg-[#E8F2FF]"
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
      style={{ minHeight: '230px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <input ref={inputRef} type="file" accept="application/pdf,.pdf" onChange={handleChange} hidden />

      <div className="space-y-5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 transition group-hover:bg-sky-200">
          <UploadCloud className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-900">Upload your medical report</p>
          <p className="text-base text-slate-600">Drag &amp; drop your PDF here, or browse files</p>
        </div>

        <Button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={disabled}
          className="h-11 rounded-lg bg-[#0f2c48] px-5 text-base font-semibold text-white hover:bg-[#153d62] disabled:opacity-80"
        >
          Choose PDF
        </Button>

        <p className="text-xs font-medium text-slate-500">PDF only • Maximum 10 MB</p>
      </div>
    </div>
  );
}
