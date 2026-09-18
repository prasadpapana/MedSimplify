export default function HomeMedicalAI({ className = '' }) {
  return (
    <svg viewBox="0 0 560 460" className={className} role="img" aria-label="3D medical AI analysis illustration" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="home-ai-paper" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFFFFF" /><stop offset="1" stopColor="#DCEEFF" /></linearGradient>
        <linearGradient id="home-ai-orb" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#60A5FA" /><stop offset="1" stopColor="#1D4ED8" /></linearGradient>
        <filter id="home-ai-shadow"><feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#2563EB" floodOpacity=".18" /></filter>
      </defs>
      <ellipse cx="285" cy="405" rx="190" ry="22" fill="#BFDDF8" opacity=".45" />
      <circle cx="104" cy="110" r="58" fill="#E8F2FF" /><circle cx="458" cy="320" r="72" fill="#E8F2FF" />
      <g filter="url(#home-ai-shadow)" transform="rotate(-6 270 220)">
        <rect x="120" y="72" width="292" height="290" rx="26" fill="url(#home-ai-paper)" stroke="#BFDDF8" strokeWidth="3" />
        <rect x="154" y="112" width="122" height="18" rx="9" fill="#0B2A4A" opacity=".9" /><rect x="154" y="151" width="190" height="11" rx="5" fill="#BFDDF8" /><rect x="154" y="174" width="158" height="11" rx="5" fill="#D9E9FA" />
        <rect x="154" y="215" width="210" height="70" rx="18" fill="#FFFFFF" stroke="#D7E4F0" /><path d="M175 258h34l14-25 18 35 18-19 20 9h47" fill="none" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="355" cy="125" r="25" fill="#E8F2FF" /><path d="M355 111v28M341 125h28" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" />
      </g>
      <g transform="translate(350 52)"><circle cx="55" cy="55" r="52" fill="url(#home-ai-orb)" /><path d="M38 57c0-18 15-31 32-25 15 5 19 23 11 37-9 16-29 21-42 10m18-39v40m-17-25h35m-32 17h29" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity=".9" /><circle cx="8" cy="18" r="7" fill="#2563EB" /><circle cx="104" cy="24" r="7" fill="#60A5FA" /><path d="M13 21l28 22M100 27L76 45" stroke="#60A5FA" strokeWidth="2" strokeDasharray="4 5" /></g>
      <g transform="translate(45 282)"><rect width="142" height="70" rx="18" fill="#FFFFFF" stroke="#D7E4F0" strokeWidth="2" /><circle cx="27" cy="35" r="15" fill="#DCFCE7" /><path d="M19 35l6 6 11-13" fill="none" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><text x="52" y="31" fill="#0B2A4A" fontSize="13" fontWeight="700">AI Analysis</text><text x="52" y="49" fill="#64748B" fontSize="10">Ready to simplify</text></g>
      <g transform="translate(412 218)"><rect width="78" height="64" rx="16" fill="#FFFFFF" stroke="#D7E4F0" strokeWidth="2" /><path d="M39 15v34M22 32h34" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" /><circle cx="14" cy="9" r="6" fill="#93C5FD" /></g>
    </svg>
  );
}