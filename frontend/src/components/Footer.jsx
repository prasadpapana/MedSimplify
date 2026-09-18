import { Stethoscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#D7E4F0] bg-[#EAF3FB]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3 text-slate-950">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-sky-100 bg-sky-50 text-sky-700">
            <Stethoscope className="h-4 w-4" />
          </span>
          <strong className="font-semibold">MedSimplify</strong>
        </div>

        <p className="text-slate-600">Clearer language for better conversations with your care team.</p>

        <span className="text-xs uppercase tracking-[0.18em] text-slate-500">For information only · Not medical advice</span>
      </div>
    </footer>
  );
}
