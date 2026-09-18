export default function ResultsMedicalIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 500 260"
      className={className}
      role="img"
      aria-label="Medical results illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="result-doc-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#F3FAFF" />
          <stop offset="100%" stopColor="#E6F4FF" />
        </linearGradient>
      </defs>

      <g>
        <rect x="36" y="56" width="200" height="148" rx="22" fill="url(#result-doc-grad)" stroke="#CFE6FB" strokeWidth="2" />
        <rect x="58" y="82" width="94" height="16" rx="8" fill="#FFFFFF" opacity="0.8" />
        <rect x="58" y="108" width="120" height="10" rx="5" fill="#D8EBFB" />
        <rect x="58" y="126" width="142" height="10" rx="5" fill="#D8EBFB" />
        <rect x="58" y="144" width="118" height="10" rx="5" fill="#D8EBFB" />
        <rect x="58" y="164" width="90" height="10" rx="5" fill="#D8EBFB" />

        <g transform="translate(290 26)">
          <rect x="0" y="28" width="146" height="146" rx="32" fill="#F5FBFF" stroke="#D8EBFA" strokeWidth="2" />
          <path d="M74 66C92 58 102 68 102 86C102 111 86 120 74 140C62 120 46 111 46 86C46 68 56 58 74 66Z" fill="#D0F0E0" stroke="#7CC9A3" strokeWidth="2" />
          <path d="M58 96H90" stroke="#6AB98E" strokeWidth="5" strokeLinecap="round" />
          <path d="M74 82V111" stroke="#6AB98E" strokeWidth="5" strokeLinecap="round" />
          <rect x="30" y="0" width="112" height="26" rx="13" fill="#EAF9F1" stroke="#CCEBD8" />
          <text x="74" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0B2A4A" fontFamily="DM Sans, sans-serif">Liver Health</text>
        </g>
      </g>
    </svg>
  );
}
