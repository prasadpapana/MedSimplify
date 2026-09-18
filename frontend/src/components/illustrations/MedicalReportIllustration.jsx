export default function MedicalReportIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 320 420"
      className={className}
      role="img"
      aria-label="Medical document illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="medical-doc-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#F4F9FF" />
          <stop offset="100%" stopColor="#E7F2FF" />
        </linearGradient>
      </defs>

      <g transform="rotate(-8 160 210)">
        <rect x="62" y="28" width="196" height="310" rx="26" fill="url(#medical-doc-bg)" stroke="#C9E3F8" strokeWidth="2" />
        <rect x="84" y="64" width="152" height="30" rx="10" fill="#FFFFFF" opacity="0.7" />
        <rect x="84" y="116" width="110" height="12" rx="6" fill="#DDEBFA" />
        <rect x="84" y="138" width="132" height="12" rx="6" fill="#DDEBFA" />
        <rect x="84" y="160" width="125" height="12" rx="6" fill="#DDEBFA" />
        <rect x="84" y="196" width="152" height="80" rx="15" fill="#FFFFFF" opacity="0.7" />
        <rect x="84" y="294" width="90" height="12" rx="6" fill="#DDEBFA" />
        <rect x="84" y="316" width="118" height="12" rx="6" fill="#DDEBFA" />

        <g transform="translate(126 56)">
          <rect x="0" y="0" width="68" height="68" rx="18" fill="#E8F2FF" stroke="#A7C8F3" strokeWidth="2" />
          <path d="M33 13V56M10 34H56" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" />
        </g>
      </g>

      <ellipse cx="160" cy="366" rx="108" ry="24" fill="#B8D8F7" opacity="0.22" />
    </svg>
  );
}
