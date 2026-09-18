export default function AnalyzeLineArt({ className = '' }) {
  return (
    <svg viewBox="0 0 520 320" className={className} role="img" aria-label="Minimal medical report line art" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#0B2A4A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M128 38h188l72 72v172H128z" fill="#F8FBFF" stroke="#2563EB" /><path d="M316 38v74h72" stroke="#2563EB" />
        <path d="M165 91h92M165 112h126M165 133h82M165 172h138M165 194h108M165 216h126" stroke="#7BA7C9" strokeWidth="5" />
        <circle cx="282" cy="176" r="35" stroke="#2563EB" /><path d="M308 202l31 31" stroke="#2563EB" strokeWidth="8" />
        <path d="M202 72v28M188 86h28" stroke="#2563EB" strokeWidth="6" />
        <path d="M84 245h28M98 231v28M395 78h25M407 66v25" stroke="#93C5FD" />
        <path d="M64 102c17-20 35-28 54-26M403 250c18 1 32-6 45-21" stroke="#BFDDF8" strokeDasharray="5 8" />
      </g>
      <circle cx="82" cy="91" r="8" fill="#E8F2FF" /><circle cx="442" cy="245" r="10" fill="#E8F2FF" />
    </svg>
  );
}