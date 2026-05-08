const G = { stroke: "currentColor", fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

{/* Pré-wedding: cocktail glass with citrus slice + umbrella */}
export function GravuraSun({ size = 100 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...G}>
      {/* Glass body — martini/coupe shape */}
      <path d="M36 36 L54 68 Q60 74, 66 68 L84 36" stroke="#1B2A4A" strokeWidth="1.2"/>
      <path d="M36 36 L84 36" stroke="#1B2A4A" strokeWidth="1"/>
      {/* Stem */}
      <line x1="60" y1="72" x2="60" y2="92" stroke="#1B2A4A" strokeWidth="1.2"/>
      {/* Base */}
      <path d="M46 92 Q53 90, 60 92 Q67 90, 74 92" stroke="#1B2A4A" strokeWidth="1.2"/>
      {/* Liquid level */}
      <path d="M42 46 Q51 43, 60 46 Q69 49, 78 46" stroke="#f1722e" strokeWidth="0.6" opacity="0.4"/>
      {/* Orange slice on rim */}
      <circle cx="80" cy="36" r="8" stroke="#f1722e" strokeWidth="0.8" fill="#f1722e" fillOpacity="0.06"/>
      <circle cx="80" cy="36" r="5.5" stroke="#f1722e" strokeWidth="0.3" opacity="0.3"/>
      {[0,60,120,180,240,300].map(a => {
        const rad = a * Math.PI / 180;
        const r = (v: number) => Math.round(v * 100) / 100;
        return <line key={a} x1={r(80 + Math.cos(rad)*1.5)} y1={r(36 + Math.sin(rad)*1.5)} x2={r(80 + Math.cos(rad)*5.5)} y2={r(36 + Math.sin(rad)*5.5)} stroke="#f1722e" strokeWidth="0.25" opacity="0.2"/>;
      })}
      {/* Little umbrella */}
      <path d="M52 28 Q52 22, 60 20 Q68 22, 68 28" stroke="#ed7169" strokeWidth="0.8" fill="#ed7169" fillOpacity="0.08"/>
      <line x1="60" y1="20" x2="60" y2="42" stroke="#ed7169" strokeWidth="0.6"/>
      {/* Mint/leaf sprig */}
      <path d="M70 32 Q76 26, 78 28" stroke="#6B8E4E" strokeWidth="0.7"/>
      <path d="M74 28 Q78 24, 80 26 Q78 30, 74 28" stroke="#6B8E4E" strokeWidth="0.5" fill="#bcc41c" fillOpacity="0.2"/>
    </svg>
  );
}

{/* Casamento: interlocked rings with orange blossom on top */}
export function GravuraAlliance({ size = 100 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...G}>
      {/* Left ring */}
      <circle cx="48" cy="58" r="18" stroke="#1B2A4A" strokeWidth="1.2"/>
      <circle cx="48" cy="58" r="15" stroke="#1B2A4A" strokeWidth="0.4" opacity="0.25"/>
      {/* Right ring */}
      <circle cx="72" cy="58" r="18" stroke="#1B2A4A" strokeWidth="1.2"/>
      <circle cx="72" cy="58" r="15" stroke="#1B2A4A" strokeWidth="0.4" opacity="0.25"/>
      {/* Diamond on left ring */}
      <path d="M48 38 L44 42 L48 46 L52 42 Z" stroke="#1B2A4A" strokeWidth="0.8" fill="#f1de78" fillOpacity="0.15"/>
      <line x1="48" y1="42" x2="44" y2="42" stroke="#1B2A4A" strokeWidth="0.4" opacity="0.3"/>
      <line x1="48" y1="42" x2="52" y2="42" stroke="#1B2A4A" strokeWidth="0.4" opacity="0.3"/>
      {/* Orange blossom bouquet on top */}
      <g opacity="0.6">
        {[0,72,144,216,288].map(a => {
          const rad = a * Math.PI / 180;
          const r = (v: number) => Math.round(v * 100) / 100;
          return <ellipse key={a} cx={r(60 + Math.cos(rad)*5)} cy={r(26 + Math.sin(rad)*5)} rx="3.5" ry="1.5" transform={`rotate(${a} ${r(60 + Math.cos(rad)*5)} ${r(26 + Math.sin(rad)*5)})`} fill="#fff" stroke="#ed7169" strokeWidth="0.4"/>;
        })}
        <circle cx="60" cy="26" r="2" fill="#f1de78" fillOpacity="0.5" stroke="none"/>
      </g>
      {/* Small leaves flanking blossom */}
      <path d="M50 30 Q46 22, 48 20 Q52 24, 50 30" stroke="#6B8E4E" strokeWidth="0.5" fill="#bcc41c" fillOpacity="0.15"/>
      <path d="M70 30 Q74 22, 72 20 Q68 24, 70 30" stroke="#6B8E4E" strokeWidth="0.5" fill="#bcc41c" fillOpacity="0.15"/>
      {/* Tiny heart between rings */}
      <path d="M58 92 Q58 89, 60 90 Q62 89, 62 92 L60 95 Z" fill="#ed7169" fillOpacity="0.2" stroke="none"/>
    </svg>
  );
}

{/* Dia de recuperação: sunglasses + sun + lemon slice (lazy day vibes) */}
export function GravuraPool({ size = 100 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...G}>
      {/* Sunglasses */}
      <path d="M28 52 Q28 42, 42 42 Q52 42, 52 52 Q52 60, 42 60 Q28 60, 28 52 Z" stroke="#1B2A4A" strokeWidth="1.1"/>
      <path d="M68 52 Q68 42, 82 42 Q92 42, 92 52 Q92 60, 82 60 Q68 60, 68 52 Z" stroke="#1B2A4A" strokeWidth="1.1"/>
      {/* Bridge */}
      <path d="M52 48 Q60 42, 68 48" stroke="#1B2A4A" strokeWidth="1"/>
      {/* Temples */}
      <path d="M28 48 L18 44" stroke="#1B2A4A" strokeWidth="1"/>
      <path d="M92 48 L102 44" stroke="#1B2A4A" strokeWidth="1"/>
      {/* Lens tint */}
      <ellipse cx="40" cy="51" rx="10" ry="7" fill="#f1722e" fillOpacity="0.05" stroke="none"/>
      <ellipse cx="80" cy="51" rx="10" ry="7" fill="#f1722e" fillOpacity="0.05" stroke="none"/>
      {/* Little sun */}
      <circle cx="96" cy="28" r="6" stroke="#f1722e" strokeWidth="0.7" fill="#f1de78" fillOpacity="0.12"/>
      {[0,45,90,135,180,225,270,315].map(a => {
        const rad = a * Math.PI / 180;
        const r = (v: number) => Math.round(v * 100) / 100;
        return <line key={a} x1={r(96 + Math.cos(rad)*8)} y1={r(28 + Math.sin(rad)*8)} x2={r(96 + Math.cos(rad)*11)} y2={r(28 + Math.sin(rad)*11)} stroke="#f1722e" strokeWidth="0.5" opacity="0.3"/>;
      })}
      {/* Water waves below */}
      <path d="M22 80 Q32 74, 42 80 Q52 86, 62 80 Q72 74, 82 80 Q92 86, 100 80" stroke="#1B2A4A" strokeWidth="0.8" opacity="0.25"/>
      <path d="M28 88 Q38 82, 48 88 Q58 94, 68 88 Q78 82, 88 88" stroke="#1B2A4A" strokeWidth="0.6" opacity="0.15"/>
      {/* Lemon wedge floating */}
      <path d="M36 74 Q30 70, 36 66 Q42 70, 36 74" stroke="#C4962A" strokeWidth="0.6" fill="#f1de78" fillOpacity="0.2"/>
    </svg>
  );
}

{/* Vinícola: wine bottle + glass + grape cluster */}
export function GravuraWine({ size = 100 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...G}>
      {/* Wine bottle */}
      <path d="M34 30 L34 40 Q28 46, 28 56 L28 92 Q28 96, 32 96 L44 96 Q48 96, 48 92 L48 56 Q48 46, 42 40 L42 30" stroke="#1B2A4A" strokeWidth="1.1"/>
      <path d="M34 30 L42 30" stroke="#1B2A4A" strokeWidth="1"/>
      {/* Bottle label */}
      <rect x="30" y="66" width="16" height="14" rx="1" stroke="#f1722e" strokeWidth="0.5" fill="#f1722e" fillOpacity="0.04"/>
      <line x1="33" y1="70" x2="43" y2="70" stroke="#f1722e" strokeWidth="0.3" opacity="0.3"/>
      <line x1="34" y1="74" x2="42" y2="74" stroke="#f1722e" strokeWidth="0.3" opacity="0.2"/>
      {/* Wine glass */}
      <path d="M66 40 L70 62 Q70 72, 80 72 Q90 72, 90 62 L94 40" stroke="#1B2A4A" strokeWidth="1.1"/>
      <path d="M66 40 L94 40" stroke="#1B2A4A" strokeWidth="0.8"/>
      {/* Wine in glass */}
      <path d="M72 52 Q80 48, 88 52" stroke="#ed7169" strokeWidth="0.5" opacity="0.35"/>
      <ellipse cx="80" cy="52" rx="8" ry="2.5" fill="#ed7169" fillOpacity="0.06" stroke="none"/>
      {/* Stem + base */}
      <line x1="80" y1="72" x2="80" y2="90" stroke="#1B2A4A" strokeWidth="1.1"/>
      <path d="M70 90 Q75 88, 80 90 Q85 88, 90 90" stroke="#1B2A4A" strokeWidth="1.1"/>
      {/* Grape cluster */}
      <circle cx="104" cy="24" r="3" stroke="#1B2A4A" strokeWidth="0.6" fill="#ed7169" fillOpacity="0.08"/>
      <circle cx="100" cy="28" r="3" stroke="#1B2A4A" strokeWidth="0.6" fill="#ed7169" fillOpacity="0.08"/>
      <circle cx="108" cy="28" r="3" stroke="#1B2A4A" strokeWidth="0.6" fill="#ed7169" fillOpacity="0.06"/>
      <circle cx="104" cy="32" r="3" stroke="#1B2A4A" strokeWidth="0.6" fill="#ed7169" fillOpacity="0.08"/>
      <circle cx="100" cy="36" r="2.5" stroke="#1B2A4A" strokeWidth="0.5" fill="#ed7169" fillOpacity="0.06"/>
      <circle cx="108" cy="36" r="2.5" stroke="#1B2A4A" strokeWidth="0.5" fill="#ed7169" fillOpacity="0.06"/>
      {/* Grape leaf */}
      <path d="M104 20 Q100 14, 104 12 Q108 14, 104 20" stroke="#6B8E4E" strokeWidth="0.6" fill="#bcc41c" fillOpacity="0.15"/>
      <path d="M104 18 L106 12" stroke="#6B8E4E" strokeWidth="0.4"/>
    </svg>
  );
}

{/* Como chegar: airplane with citrus trail */}
export function GravuraAviao({ size = 100 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...G}>
      {/* Airplane body */}
      <path d="M28 68 L52 56 L78 44 Q88 40, 94 42 Q98 44, 94 48 L78 52 L52 62 L38 78 L34 74 L44 62 L28 68 Z" stroke="#1B2A4A" strokeWidth="1.2"/>
      {/* Wing */}
      <path d="M56 58 L48 38 Q46 34, 50 34 L70 46" stroke="#1B2A4A" strokeWidth="1"/>
      {/* Tail */}
      <path d="M34 72 L24 62 Q22 60, 24 58 L32 66" stroke="#1B2A4A" strokeWidth="1"/>
      {/* Trail — dotted citrus path */}
      <circle cx="16" cy="58" r="1.5" fill="#f1722e" fillOpacity="0.3" stroke="none"/>
      <circle cx="10" cy="64" r="1" fill="#f1de78" fillOpacity="0.4" stroke="none"/>
      <circle cx="20" cy="68" r="1.2" fill="#ed7169" fillOpacity="0.25" stroke="none"/>
      <circle cx="14" cy="74" r="0.8" fill="#bcc41c" fillOpacity="0.3" stroke="none"/>
      {/* Small lemon near plane */}
      <ellipse cx="100" cy="32" rx="4" ry="5.5" transform="rotate(20 100 32)" stroke="#C4962A" strokeWidth="0.6" fill="#f1de78" fillOpacity="0.15"/>
      <path d="M100 26 Q102 24, 104 25" stroke="#6B8E4E" strokeWidth="0.5"/>
      <path d="M103 24 Q106 22, 105 25 Q104 26, 103 24" stroke="#6B8E4E" strokeWidth="0.4" fill="#bcc41c" fillOpacity="0.15"/>
      {/* Clouds */}
      <path d="M76 74 Q80 70, 86 74 Q90 70, 94 74" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.15"/>
      <path d="M82 82 Q86 78, 92 82" stroke="#1B2A4A" strokeWidth="0.4" opacity="0.1"/>
    </svg>
  );
}

{/* RSVP: envelope with citrus wax seal + orange blossom sprig */}
export function GravuraEnvelope({ size = 100 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...G}>
      {/* Envelope */}
      <rect x="24" y="38" width="72" height="50" rx="2" stroke="#1B2A4A" strokeWidth="1.2"/>
      <path d="M24 38 L60 64 L96 38" stroke="#1B2A4A" strokeWidth="1.2"/>
      <path d="M24 88 L48 66" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.2"/>
      <path d="M96 88 L72 66" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.2"/>
      {/* Wax seal — orange/citrus colored */}
      <circle cx="60" cy="78" r="8" stroke="#f1722e" strokeWidth="0.8" fill="#f1722e" fillOpacity="0.1"/>
      <circle cx="60" cy="78" r="5" stroke="#f1722e" strokeWidth="0.4" opacity="0.3"/>
      {/* Heart on seal */}
      <path d="M58 77 Q58 75, 60 76 Q62 75, 62 77 L60 80 Z" fill="#f1722e" fillOpacity="0.3" stroke="none"/>
      {/* Orange blossom sprig coming out */}
      <path d="M86 32 Q78 28, 74 34" stroke="#6B8E4E" strokeWidth="0.7"/>
      <path d="M80 28 Q76 24, 78 22 Q82 24, 80 28" stroke="#6B8E4E" strokeWidth="0.5" fill="#bcc41c" fillOpacity="0.2"/>
      <path d="M86 30 Q90 26, 88 24 Q84 26, 86 30" stroke="#6B8E4E" strokeWidth="0.5" fill="#bcc41c" fillOpacity="0.18"/>
      {/* Tiny blossom */}
      <g opacity="0.5">
        {[0,72,144,216,288].map(a => {
          const rad = a * Math.PI / 180;
          const r = (v: number) => Math.round(v * 100) / 100;
          return <ellipse key={a} cx={r(76 + Math.cos(rad)*3)} cy={r(30 + Math.sin(rad)*3)} rx="1.8" ry="0.8" transform={`rotate(${a} ${r(76 + Math.cos(rad)*3)} ${r(30 + Math.sin(rad)*3)})`} fill="#fff" stroke="#ed7169" strokeWidth="0.3"/>;
        })}
        <circle cx="76" cy="30" r="1" fill="#f1de78" fillOpacity="0.5" stroke="none"/>
      </g>
    </svg>
  );
}

{/* Presentes: gift box with citrus ribbon bow + orange blossom */}
export function GravuraPresente({ size = 100 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...G}>
      {/* Box body */}
      <rect x="30" y="52" width="60" height="40" rx="1" stroke="#1B2A4A" strokeWidth="1.2"/>
      {/* Box lid */}
      <rect x="26" y="42" width="68" height="12" rx="1" stroke="#1B2A4A" strokeWidth="1.2"/>
      {/* Ribbon vertical */}
      <line x1="60" y1="54" x2="60" y2="92" stroke="#f1722e" strokeWidth="0.8" opacity="0.35"/>
      {/* Ribbon horizontal on lid */}
      <line x1="26" y1="48" x2="94" y2="48" stroke="#f1722e" strokeWidth="0.6" opacity="0.3"/>
      {/* Bow — citrus colored */}
      <path d="M48 42 Q42 30, 50 28 Q58 26, 60 36" stroke="#f1722e" strokeWidth="1"/>
      <path d="M72 42 Q78 30, 70 28 Q62 26, 60 36" stroke="#f1722e" strokeWidth="1"/>
      {/* Bow center — little orange */}
      <circle cx="60" cy="38" r="4" stroke="#f1722e" strokeWidth="0.6" fill="#f1722e" fillOpacity="0.08"/>
      {/* Orange blossom on bow */}
      <g opacity="0.5">
        {[0,72,144,216,288].map(a => {
          const rad = a * Math.PI / 180;
          const r = (v: number) => Math.round(v * 100) / 100;
          return <ellipse key={a} cx={r(60 + Math.cos(rad)*3)} cy={r(38 + Math.sin(rad)*3)} rx="1.8" ry="0.8" transform={`rotate(${a} ${r(60 + Math.cos(rad)*3)} ${r(38 + Math.sin(rad)*3)})`} fill="#fff" stroke="#ed7169" strokeWidth="0.3"/>;
        })}
        <circle cx="60" cy="38" r="1.2" fill="#f1de78" fillOpacity="0.5" stroke="none"/>
      </g>
      {/* Small leaf */}
      <path d="M66 30 Q70 24, 68 22 Q64 24, 66 30" stroke="#6B8E4E" strokeWidth="0.5" fill="#bcc41c" fillOpacity="0.15"/>
    </svg>
  );
}

export function GravuraOlive({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.45} viewBox="0 0 200 90" fill="none" {...G}>
      {/* Main branch */}
      <path d="M25 55 Q55 32, 100 42 Q145 52, 175 30" stroke="#6B8E4E" strokeWidth="1"/>
      {/* Leaves — chartreuse fill, green stroke */}
      <path d="M50 38 Q42 26, 48 22 Q56 26, 50 38" stroke="#6B8E4E" strokeWidth="0.6" fill="#bcc41c" fillOpacity="0.2"/>
      <path d="M49 24 L50 34" stroke="#6B8E4E" strokeWidth="0.3" opacity="0.4"/>
      <path d="M62 42 Q70 52, 64 56 Q56 52, 62 42" stroke="#6B8E4E" strokeWidth="0.6" fill="#bcc41c" fillOpacity="0.18"/>
      <path d="M63 44 L62 54" stroke="#6B8E4E" strokeWidth="0.3" opacity="0.4"/>
      <path d="M90 40 Q82 28, 88 24 Q96 28, 90 40" stroke="#6B8E4E" strokeWidth="0.6" fill="#bcc41c" fillOpacity="0.22"/>
      <path d="M89 26 L90 36" stroke="#6B8E4E" strokeWidth="0.3" opacity="0.4"/>
      <path d="M120 44 Q128 54, 122 58 Q114 54, 120 44" stroke="#6B8E4E" strokeWidth="0.6" fill="#bcc41c" fillOpacity="0.18"/>
      <path d="M121 46 L120 56" stroke="#6B8E4E" strokeWidth="0.3" opacity="0.4"/>
      <path d="M148 36 Q140 24, 146 20 Q154 24, 148 36" stroke="#6B8E4E" strokeWidth="0.6" fill="#bcc41c" fillOpacity="0.2"/>
      <path d="M147 22 L148 32" stroke="#6B8E4E" strokeWidth="0.3" opacity="0.4"/>
      <path d="M165 32 Q173 42, 167 46 Q159 42, 165 32" stroke="#6B8E4E" strokeWidth="0.6" fill="#bcc41c" fillOpacity="0.15"/>
      {/* Lemon */}
      <ellipse cx="75" cy="38" rx="7" ry="10" transform="rotate(-15 75 38)" stroke="#C4962A" strokeWidth="0.8" fill="#f1de78" fillOpacity="0.2"/>
      {/* Small orange */}
      <circle cx="135" cy="44" r="7" stroke="#f1722e" strokeWidth="0.8" fill="#f1722e" fillOpacity="0.08"/>
      {/* Blossom near branch */}
      <g opacity="0.45">
        {[0,72,144,216,288].map(a => {
          const rad = a * Math.PI / 180;
          const r = (v: number) => Math.round(v * 100) / 100;
          return <ellipse key={a} cx={r(108 + Math.cos(rad)*3.5)} cy={r(40 + Math.sin(rad)*3.5)} rx="2" ry="1" transform={`rotate(${a} ${r(108 + Math.cos(rad)*3.5)} ${r(40 + Math.sin(rad)*3.5)})`} fill="#fff" stroke="#ed7169" strokeWidth="0.3"/>;
        })}
        <circle cx="108" cy="40" r="1.2" fill="#f1de78" fillOpacity="0.6" stroke="none"/>
      </g>
    </svg>
  );
}

export function GravuraLaranja({ size = 100 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" {...G}>
      {/* Main orange */}
      <circle cx="60" cy="58" r="26" stroke="#f1722e" strokeWidth="1.2" fill="#f1722e" fillOpacity="0.08"/>
      <circle cx="60" cy="58" r="20" stroke="#f1722e" strokeWidth="0.4" opacity="0.25"/>
      <circle cx="60" cy="58" r="4" stroke="#f1722e" strokeWidth="0.4" opacity="0.25"/>
      {/* Segments */}
      {[0,45,90,135,180,225,270,315].map(a => {
        const rad = a * Math.PI / 180;
        const r = (v: number) => Math.round(v * 100) / 100;
        return <line key={a} x1={r(60 + Math.cos(rad)*4)} y1={r(58 + Math.sin(rad)*4)} x2={r(60 + Math.cos(rad)*20)} y2={r(58 + Math.sin(rad)*20)} stroke="#f1722e" strokeWidth="0.35" opacity="0.18"/>;
      })}
      {/* Stem */}
      <path d="M60 32 L60 24" stroke="#6B8E4E" strokeWidth="1.2"/>
      {/* Leaves */}
      <path d="M60 26 Q52 16, 44 18 Q50 22, 60 26" stroke="#6B8E4E" strokeWidth="0.8" fill="#bcc41c" fillOpacity="0.2"/>
      <path d="M52 18 L56 23" stroke="#6B8E4E" strokeWidth="0.3" opacity="0.5"/>
      <path d="M60 24 Q68 14, 78 16 Q72 22, 60 24" stroke="#6B8E4E" strokeWidth="0.8" fill="#bcc41c" fillOpacity="0.2"/>
      <path d="M70 16 L65 21" stroke="#6B8E4E" strokeWidth="0.3" opacity="0.5"/>
      {/* Small lemon companion */}
      <ellipse cx="92" cy="42" rx="5" ry="8" transform="rotate(25 92 42)" stroke="#C4962A" strokeWidth="0.7" fill="#f1de78" fillOpacity="0.2"/>
      {/* Navel dot */}
      <circle cx="60" cy="84" r="2.5" stroke="#f1722e" strokeWidth="0.6" opacity="0.3"/>
      {/* Tiny blossom */}
      <g opacity="0.4">
        {[0,72,144,216,288].map(a => {
          const rad = a * Math.PI / 180;
          const r = (v: number) => Math.round(v * 100) / 100;
          return <ellipse key={a} cx={r(30 + Math.cos(rad)*3.5)} cy={r(44 + Math.sin(rad)*3.5)} rx="2" ry="1" transform={`rotate(${a} ${r(30 + Math.cos(rad)*3.5)} ${r(44 + Math.sin(rad)*3.5)})`} fill="#fff" stroke="#ed7169" strokeWidth="0.3"/>;
        })}
        <circle cx="30" cy="44" r="1.2" fill="#f1de78" fillOpacity="0.6" stroke="none"/>
      </g>
    </svg>
  );
}

export function GravuraCitrusDivider({ width = 360 }: { width?: number }) {
  return (
    <svg width={width} height={56} viewBox="0 0 400 56" fill="none" {...G}>
      {/* ── Left branch ── */}
      <path d="M16 30 Q50 26, 80 28 Q110 30, 140 27 Q160 25, 175 28" stroke="#bcc41c" strokeWidth="0.8"/>
      {/* Left leaves — chartreuse */}
      <path d="M50 28 Q44 18, 50 14 Q56 18, 50 28" stroke="#6B8E4E" strokeWidth="0.6" fill="#bcc41c" fillOpacity="0.18"/>
      <path d="M55 15 L50 20" stroke="#6B8E4E" strokeWidth="0.3" opacity="0.5"/>
      <path d="M80 28 Q86 36, 80 40 Q74 36, 80 28" stroke="#6B8E4E" strokeWidth="0.6" fill="#bcc41c" fillOpacity="0.15"/>
      <path d="M80 29 L80 38" stroke="#6B8E4E" strokeWidth="0.3" opacity="0.5"/>
      {/* Left small lemon */}
      <ellipse cx="110" cy="26" rx="5" ry="7" transform="rotate(-20 110 26)" stroke="#C4962A" strokeWidth="0.7" fill="#f1de78" fillOpacity="0.22"/>
      {/* Left blossom — 5 petals */}
      <g opacity="0.5">
        {[0,72,144,216,288].map(a => {
          const rad = a * Math.PI / 180;
          const r = (v: number) => Math.round(v * 100) / 100;
          return <ellipse key={a} cx={r(140 + Math.cos(rad)*4)} cy={r(24 + Math.sin(rad)*4)} rx="2.5" ry="1.2" transform={`rotate(${a} ${r(140 + Math.cos(rad)*4)} ${r(24 + Math.sin(rad)*4)})`} fill="#fff" stroke="#ed7169" strokeWidth="0.3"/>;
        })}
        <circle cx="140" cy="24" r="1.5" fill="#f1de78" fillOpacity="0.6" stroke="none"/>
      </g>

      {/* ── Center orange slice ── */}
      <circle cx="200" cy="28" r="18" stroke="#f1722e" strokeWidth="0.9" fill="#f1722e" fillOpacity="0.07"/>
      <circle cx="200" cy="28" r="14" stroke="#f1722e" strokeWidth="0.4" opacity="0.3"/>
      <circle cx="200" cy="28" r="3" stroke="#f1722e" strokeWidth="0.4" opacity="0.3"/>
      {/* Orange segments */}
      {[0,45,90,135,180,225,270,315].map(a => {
        const rad = a * Math.PI / 180;
        const r = (v: number) => Math.round(v * 100) / 100;
        return <line key={a} x1={r(200 + Math.cos(rad)*3)} y1={r(28 + Math.sin(rad)*3)} x2={r(200 + Math.cos(rad)*14)} y2={r(28 + Math.sin(rad)*14)} stroke="#f1722e" strokeWidth="0.35" opacity="0.2"/>;
      })}
      {/* Tiny seeds */}
      {[30,150,270].map(a => {
        const rad = a * Math.PI / 180;
        const r = (v: number) => Math.round(v * 100) / 100;
        return <ellipse key={a} cx={r(200 + Math.cos(rad)*7)} cy={r(28 + Math.sin(rad)*7)} rx="1" ry="1.8" transform={`rotate(${a} ${r(200 + Math.cos(rad)*7)} ${r(28 + Math.sin(rad)*7)})`} fill="#f1722e" fillOpacity="0.15" stroke="none"/>;
      })}
      {/* Small leaf on top of orange */}
      <path d="M200 10 Q204 6, 210 8 Q206 12, 200 10" fill="#6B8E4E" fillOpacity="0.35" stroke="#6B8E4E" strokeWidth="0.4"/>
      <path d="M200 10 L206 8" stroke="#6B8E4E" strokeWidth="0.25" opacity="0.5"/>

      {/* ── Right branch ── */}
      <path d="M225 28 Q240 25, 260 27 Q290 30, 320 28 Q350 26, 384 30" stroke="#bcc41c" strokeWidth="0.8"/>
      {/* Right blossom */}
      <g opacity="0.45">
        {[0,72,144,216,288].map(a => {
          const rad = a * Math.PI / 180;
          const r = (v: number) => Math.round(v * 100) / 100;
          return <ellipse key={a} cx={r(260 + Math.cos(rad)*4)} cy={r(24 + Math.sin(rad)*4)} rx="2.5" ry="1.2" transform={`rotate(${a} ${r(260 + Math.cos(rad)*4)} ${r(24 + Math.sin(rad)*4)})`} fill="#fff" stroke="#ed7169" strokeWidth="0.3"/>;
        })}
        <circle cx="260" cy="24" r="1.5" fill="#f1de78" fillOpacity="0.6" stroke="none"/>
      </g>
      {/* Right small lemon */}
      <ellipse cx="295" cy="30" rx="5" ry="7" transform="rotate(15 295 30)" stroke="#C4962A" strokeWidth="0.7" fill="#f1de78" fillOpacity="0.22"/>
      {/* Right leaves — chartreuse */}
      <path d="M325 28 Q319 18, 325 14 Q331 18, 325 28" stroke="#6B8E4E" strokeWidth="0.6" fill="#bcc41c" fillOpacity="0.18"/>
      <path d="M325 16 L325 26" stroke="#6B8E4E" strokeWidth="0.3" opacity="0.5"/>
      <path d="M355 30 Q361 38, 355 42 Q349 38, 355 30" stroke="#6B8E4E" strokeWidth="0.6" fill="#bcc41c" fillOpacity="0.15"/>
      <path d="M355 31 L355 40" stroke="#6B8E4E" strokeWidth="0.3" opacity="0.5"/>
    </svg>
  );
}
