export default function HowItWorksIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 540 330"
      className={className}
      role="img"
      aria-label="How MedSimplify works illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="how-stage-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#F5FAFF" />
          <stop offset="100%" stopColor="#EAF4FF" />
        </linearGradient>
      </defs>

      <g>
        <rect x="34" y="110" width="130" height="120" rx="20" fill="url(#how-stage-bg)" stroke="#C7DEF9" strokeWidth="2" />
        <path d="M62 144H132" stroke="#B9D6F5" strokeWidth="8" strokeLinecap="round" />
        <path d="M62 165H117" stroke="#B9D6F5" strokeWidth="8" strokeLinecap="round" />
        <path d="M62 186H126" stroke="#B9D6F5" strokeWidth="8" strokeLinecap="round" />
        <path d="M62 206H104" stroke="#B9D6F5" strokeWidth="8" strokeLinecap="round" />
        <rect x="48" y="86" width="26" height="26" rx="8" fill="#E7F1FF" stroke="#C7DEF9" />
        <path d="M58 93V104M53 99H63" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
        <text x="246" y="135" fontSize="20" fontWeight="700" fill="#0B2A4A" fontFamily="DM Sans, sans-serif">PDF</text>

        <path d="M185 172H245" stroke="#B7D5F6" strokeWidth="4" strokeLinecap="round" />
        <path d="M245 172L234 163M245 172L234 181" stroke="#B7D5F6" strokeWidth="4" strokeLinecap="round" />

        <rect x="258" y="110" width="130" height="120" rx="20" fill="url(#how-stage-bg)" stroke="#C7DEF9" strokeWidth="2" />
        <circle cx="298" cy="164" r="20" fill="#E2F0FF" stroke="#B6D0F2" strokeWidth="2" />
        <path d="M289 164H307M298 155V173" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
        <path d="M334 148H364M334 164H374M334 180H351" stroke="#B7D5F6" strokeWidth="6" strokeLinecap="round" />
        <text x="242" y="250" fontSize="20" fontWeight="700" fill="#0B2A4A" fontFamily="DM Sans, sans-serif">AI / NLP</text>

        <path d="M395 172H455" stroke="#B7D5F6" strokeWidth="4" strokeLinecap="round" />
        <path d="M455 172L444 163M455 172L444 181" stroke="#B7D5F6" strokeWidth="4" strokeLinecap="round" />

        <rect x="472" y="110" width="130" height="120" rx="20" fill="url(#how-stage-bg)" stroke="#C7DEF9" strokeWidth="2" />
        <rect x="499" y="136" width="74" height="68" rx="14" fill="#FFFFFF" stroke="#D9E8FA" strokeWidth="2" />
        <path d="M520 156H552" stroke="#A9D6F0" strokeWidth="6" strokeLinecap="round" />
        <path d="M520 174H552" stroke="#A9D6F0" strokeWidth="6" strokeLinecap="round" />
        <path d="M520 192H542" stroke="#A9D6F0" strokeWidth="6" strokeLinecap="round" />
        <path d="M595 159L609 171L595 183" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="470" y="250" fontSize="20" fontWeight="700" fill="#0B2A4A" fontFamily="DM Sans, sans-serif">Simple Result</text>
      </g>
    </svg>
  );
}
