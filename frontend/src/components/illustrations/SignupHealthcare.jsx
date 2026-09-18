export default function SignupHealthcare({ className = '' }) {
  return (
    <svg viewBox="0 0 560 430" className={className} role="img" aria-label="Soft gradient healthcare signup illustration" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="signup-glow"><stop stopColor="#93C5FD" stopOpacity=".65" /><stop offset="1" stopColor="#93C5FD" stopOpacity="0" /></radialGradient>
        <linearGradient id="signup-sheet" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFFFFF" /><stop offset="1" stopColor="#DCEEFF" /></linearGradient>
        <filter id="signup-shadow"><feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#2563EB" floodOpacity=".16" /></filter>
      </defs>
      <circle cx="284" cy="213" r="190" fill="url(#signup-glow)" /><circle cx="86" cy="92" r="46" fill="#DCEEFF" opacity=".7" /><circle cx="462" cy="329" r="66" fill="#DCEEFF" opacity=".6" />
      <path d="M45 307c44-36 76-39 116-12 38 25 66 21 101-8 35-28 70-27 105-2 37 27 71 25 125-17" fill="none" stroke="#BFDBFE" strokeWidth="6" strokeLinecap="round" opacity=".85" />
      <g filter="url(#signup-shadow)" transform="rotate(-6 280 205)"><rect x="135" y="70" width="270" height="286" rx="26" fill="url(#signup-sheet)" stroke="#BFDDF8" strokeWidth="3" /><rect x="171" y="111" width="126" height="17" rx="8" fill="#0B2A4A" /><rect x="171" y="148" width="178" height="10" rx="5" fill="#BFDDF8" /><rect x="171" y="170" width="145" height="10" rx="5" fill="#DCEEFF" /><rect x="171" y="208" width="198" height="78" rx="18" fill="#FFFFFF" stroke="#D7E4F0" /><path d="M190 255h32l16-28 20 43 20-24 20 12h52" fill="none" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="360" cy="112" r="23" fill="#E8F2FF" /><path d="M360 99v26M347 112h26" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" /></g>
      <g transform="translate(50 137)"><rect width="112" height="76" rx="20" fill="#FFFFFF" stroke="#D7E4F0" strokeWidth="2" /><circle cx="35" cy="38" r="18" fill="#E8F2FF" /><path d="M35 26v24M23 38h24" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" /><rect x="63" y="28" width="30" height="7" rx="3" fill="#BFDDF8" /><rect x="63" y="43" width="22" height="7" rx="3" fill="#DCEEFF" /></g>
      <g transform="translate(391 223)"><rect width="119" height="68" rx="20" fill="#FFFFFF" stroke="#D7E4F0" strokeWidth="2" /><circle cx="26" cy="34" r="13" fill="#DCFCE7" /><path d="M19 34l5 5 9-11" fill="none" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><text x="48" y="31" fill="#0B2A4A" fontSize="12" fontWeight="700">Organized</text><text x="48" y="48" fill="#64748B" fontSize="10">Reports ready</text></g>
    </svg>
  );
}