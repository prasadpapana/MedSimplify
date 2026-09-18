export default function HomeHeroIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 560 460"
      className={className}
      role="img"
      aria-label="Medical report simplification illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="home-hero-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#F5FAFF" />
          <stop offset="100%" stopColor="#E8F3FF" />
        </linearGradient>
      </defs>

      <circle cx="118" cy="112" r="68" fill="#E8F3FF" opacity="0.8" />
      <circle cx="432" cy="78" r="54" fill="#E8F3FF" opacity="0.7" />
      <circle cx="470" cy="350" r="72" fill="#E8F3FF" opacity="0.8" />

      <g transform="translate(92 68)">
        <rect x="52" y="28" width="260" height="265" rx="26" fill="url(#home-hero-bg)" stroke="#C8E2F9" strokeWidth="2" />
        <rect x="84" y="60" width="118" height="18" rx="9" fill="#FFFFFF" opacity="0.8" />
        <rect x="84" y="95" width="144" height="12" rx="6" fill="#D8E9FB" />
        <rect x="84" y="120" width="130" height="12" rx="6" fill="#D8E9FB" />
        <rect x="84" y="148" width="176" height="62" rx="16" fill="#FFFFFF" opacity="0.8" />
        <rect x="84" y="220" width="92" height="12" rx="6" fill="#D8E9FB" />
        <rect x="84" y="240" width="124" height="12" rx="6" fill="#D8E9FB" />

        <g transform="translate(270 0)">
          <rect x="0" y="0" width="152" height="92" rx="18" fill="#FFFFFF" stroke="#D9E8FA" strokeWidth="2" />
          <rect x="18" y="18" width="84" height="16" rx="8" fill="#DFF2FF" />
          <rect x="18" y="42" width="112" height="10" rx="5" fill="#DDEBFA" />
          <rect x="18" y="58" width="96" height="10" rx="5" fill="#DDEBFA" />
          <path d="M118 18L128 28L118 38" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      <g transform="translate(160 300)">
        <rect x="0" y="0" width="206" height="94" rx="18" fill="#FFFFFF" stroke="#DCEBFA" strokeWidth="2" />
        <rect x="18" y="18" width="14" height="14" rx="4" fill="#E6F9EA" />
        <path d="M22 25L27 31L38 18" stroke="#1F9D5B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="54" y="30" fontSize="16" fontWeight="700" fill="#0B2A4A" fontFamily="DM Sans, sans-serif">Simple Explanation</text>
        <text x="18" y="62" fontSize="12" fill="#5F7C91" fontFamily="DM Sans, sans-serif">Complex report translated into clear,</text>
        <text x="18" y="78" fontSize="12" fill="#5F7C91" fontFamily="DM Sans, sans-serif">everyday language.</text>
      </g>
    </svg>
  );
}
