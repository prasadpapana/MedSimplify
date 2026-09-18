export default function SafetyIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 220 160"
      className={className}
      role="img"
      aria-label="Safety illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="18" y="26" width="120" height="92" rx="18" fill="#F4F9FF" stroke="#D2E5FA" strokeWidth="2" />
      <rect x="36" y="44" width="70" height="14" rx="7" fill="#FFFFFF" opacity="0.75" />
      <rect x="36" y="65" width="78" height="8" rx="4" fill="#DCECFB" />
      <rect x="36" y="79" width="62" height="8" rx="4" fill="#DCECFB" />
      <rect x="36" y="93" width="72" height="8" rx="4" fill="#DCECFB" />

      <g transform="translate(120 18)">
        <path d="M36 0L66 13V36C66 56 53 74 36 84C19 74 6 56 6 36V13L36 0Z" fill="#EAF5FF" stroke="#CBE2FA" strokeWidth="2" />
        <path d="M28 38L33 43L46 30" stroke="#2D9C6B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
