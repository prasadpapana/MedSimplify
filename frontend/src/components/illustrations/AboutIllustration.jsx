export default function AboutIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 520 260"
      className={className}
      role="img"
      aria-label="About MedSimplify illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="about-doc-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#F4FAFF" />
          <stop offset="100%" stopColor="#E8F3FF" />
        </linearGradient>
      </defs>

      <g>
        <rect x="48" y="56" width="210" height="132" rx="24" fill="url(#about-doc-grad)" stroke="#CFE6FB" strokeWidth="2" />
        <rect x="76" y="82" width="94" height="16" rx="8" fill="#FFFFFF" opacity="0.8" />
        <rect x="76" y="106" width="132" height="10" rx="5" fill="#DCECFB" />
        <rect x="76" y="124" width="148" height="10" rx="5" fill="#DCECFB" />
        <rect x="76" y="142" width="120" height="10" rx="5" fill="#DCECFB" />

        <path d="M296 125H360" stroke="#B9D6F6" strokeWidth="4" strokeLinecap="round" />
        <path d="M360 125L348 117M360 125L348 133" stroke="#B9D6F6" strokeWidth="4" strokeLinecap="round" />

        <g transform="translate(352 48)">
          <circle cx="54" cy="54" r="42" fill="#EAF5FF" stroke="#D2E6FB" strokeWidth="2" />
          <path d="M54 30V78M30 54H78" stroke="#2563EB" strokeWidth="7" strokeLinecap="round" />
          <path d="M70 90C80 96 89 98 98 96" stroke="#A8D0F8" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        <g transform="translate(284 138)">
          <rect x="0" y="0" width="164" height="70" rx="18" fill="#FFFFFF" stroke="#DCECFB" strokeWidth="2" />
          <path d="M18 23H62" stroke="#9ED3F2" strokeWidth="7" strokeLinecap="round" />
          <path d="M18 40H50" stroke="#9ED3F2" strokeWidth="7" strokeLinecap="round" />
          <path d="M92 22L125 22" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" />
          <path d="M92 38L116 38" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" />
          <path d="M18 54H60" stroke="#9ED3F2" strokeWidth="7" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}
