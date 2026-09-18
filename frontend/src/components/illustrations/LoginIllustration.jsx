export default function LoginIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 420 420"
      className={className}
      role="img"
      aria-label="Healthcare login illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="login-glow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#D9EDFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#A7D4FF" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <circle cx="140" cy="118" r="110" fill="url(#login-glow)" opacity="0.8" />
      <circle cx="315" cy="288" r="122" fill="url(#login-glow)" opacity="0.55" />

      <g transform="translate(88 80)">
        <rect x="20" y="26" width="190" height="150" rx="26" fill="#0F2B48" opacity="0.18" stroke="#A5D0FF" strokeWidth="2" />
        <path d="M60 72C80 55 95 63 106 77C116 90 132 94 146 88C160 82 170 71 177 62" stroke="#8EC2FF" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M44 116H160" stroke="#9EC8F2" strokeWidth="4" strokeLinecap="round" />
        <path d="M44 132H180" stroke="#9EC8F2" strokeWidth="4" strokeLinecap="round" />
        <path d="M44 148H170" stroke="#9EC8F2" strokeWidth="4" strokeLinecap="round" />

        <g transform="translate(188 26)">
          <rect x="0" y="0" width="110" height="110" rx="24" fill="#F6FBFF" stroke="#DCECFB" strokeWidth="2" />
          <path d="M55 22V88M22 55H88" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}
