export default function LanguageIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 520 260"
      className={className}
      role="img"
      aria-label="Multilingual medical illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lang-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#F5FAFF" />
          <stop offset="100%" stopColor="#EAF4FF" />
        </linearGradient>
      </defs>

      <circle cx="128" cy="130" r="72" fill="#E8F3FF" stroke="#CAE3FA" strokeWidth="2" />
      <path d="M68 130H188M128 70V190M90 96C104 108 116 118 128 130C140 118 152 108 166 96M90 164C104 152 116 142 128 130C140 142 152 152 166 164" stroke="#7AB6F4" strokeWidth="3" fill="none" strokeLinecap="round" />

      <g transform="translate(220 34)">
        <rect x="0" y="32" width="220" height="150" rx="24" fill="url(#lang-bg)" stroke="#CFE6FB" strokeWidth="2" />
        <rect x="28" y="62" width="116" height="18" rx="9" fill="#FFFFFF" opacity="0.8" />
        <rect x="28" y="92" width="158" height="10" rx="5" fill="#DDECFB" />
        <rect x="28" y="110" width="148" height="10" rx="5" fill="#DDECFB" />
        <rect x="28" y="128" width="126" height="10" rx="5" fill="#DDECFB" />
        <rect x="28" y="148" width="86" height="10" rx="5" fill="#DDECFB" />
      </g>

      <g>
        {[
          { x: 226, y: 26, text: 'English' },
          { x: 280, y: 16, text: 'తెలుగు' },
          { x: 332, y: 32, text: 'हिन्दी' },
          { x: 188, y: 182, text: 'தமிழ்' },
          { x: 252, y: 190, text: 'ಕನ್ನಡ' },
          { x: 326, y: 182, text: 'മലയാളം' }
        ].map((item) => (
          <g key={item.text} transform={`translate(${item.x} ${item.y})`}>
            <rect x="0" y="0" width="64" height="24" rx="12" fill="#FFFFFF" stroke="#D7EAFB" strokeWidth="1.5" />
            <text x="32" y="16" textAnchor="middle" fontSize="9" fill="#0B2A4A" fontFamily="DM Sans, sans-serif">{item.text}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}
