import React from 'react';

interface HeroArchitectureVisualProps {
  label: string;
  nodes: [string, string, string];
  language?: 'en' | 'ur';
}

/**
 * Editorial agency showcase panel for the Homepage Hero.
 * Replaces grey wireframe boxes with a refined, warm-toned architectural composition.
 */
export const HeroArchitectureVisual: React.FC<HeroArchitectureVisualProps> = ({
  label,
  nodes,
  language = 'en',
}) => {
  const isUr = language === 'ur';

  return (
    <div
      className="relative w-full h-full min-h-[340px] rounded-2xl border border-[#253A32] bg-[#16241F] p-6 sm:p-7 flex flex-col justify-between shadow-2xl"
      aria-label={label}
    >
      {/* Top Studio Header */}
      <div className="flex items-center justify-between border-b border-[#253A32] pb-4">
        <span className="text-xs font-medium text-[#C58F38] tracking-wide">
          {label}
        </span>
        <span dir="ltr" className="font-mono-num text-[11px] text-[#A6B5AF]">
          khansmarketing.com
        </span>
      </div>

      {/* Layered Editorial Showcase Composition */}
      <div className="my-6 space-y-4">
        {/* Mini Client Preview Window */}
        <div className="rounded-xl border border-[#2A4239] bg-[#111C18] p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between text-[11px] text-[#A6B5AF]">
            <span className="font-mono-num text-[#F7F4EE]">
              {isUr ? '01 · ویب اور مواد' : '01 · Web & Content'}
            </span>
            <span dir="ltr" className="text-[#C58F38]">
              LTR · اردو RTL
            </span>
          </div>
          <div className="h-px bg-[#253A32]" />
          <div className="grid grid-cols-12 gap-3 items-center pt-1">
            <div className="col-span-7 space-y-2">
              <div className="text-sm font-semibold text-[#F7F4EE]">
                {isUr ? 'واضح ڈھانچہ اور تحریر' : 'Clear Structure & Copy'}
              </div>
              <div className="text-xs text-[#A6B5AF] leading-relaxed">
                {isUr
                  ? 'لانچ کے دن سے ہی مستند کاروباری پیغام اور ریسپانسیو صفحات۔'
                  : 'Responsive pages built with real business messaging from launch day.'}
              </div>
            </div>
            <div className="col-span-5 rounded-lg border border-[#253A32] bg-[#172620] p-3 flex flex-col items-end justify-between">
              <svg viewBox="0 0 110 44" fill="none" className="w-full h-10" aria-hidden="true">
                <path
                  d="M4 38 C24 34, 42 28, 58 20 C76 12, 92 8, 106 4"
                  stroke="#C58F38"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="106" cy="4" r="3" fill="#C58F38" />
              </svg>
              <span className="font-mono-num text-[10px] text-[#A6B5AF]">
                {isUr ? 'سرچ گروتھ' : 'Search Growth'}
              </span>
            </div>
          </div>
        </div>

        {/* Disciplines Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {nodes.map((node, index) => (
            <div
              key={node}
              className="rounded-lg border border-[#253A32] bg-[#111C18]/80 px-3.5 py-3 flex flex-col gap-1"
            >
              <span dir="ltr" className="font-mono-num text-[11px] text-[#C58F38] w-fit">
                0{index + 1}
              </span>
              <span className="text-xs font-medium text-[#F7F4EE] leading-snug">
                {node}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Quiet Rule */}
      <div className="pt-3 border-t border-[#253A32] flex items-center justify-between text-xs text-[#A6B5AF]">
        <span>{isUr ? 'ویب سائٹس · سرچ · سوشل میڈیا' : 'Websites · Search · Social'}</span>
        <span dir="ltr" className="font-mono-num text-[#C58F38]">
          0321-2995766
        </span>
      </div>
    </div>
  );
};

export const WebBlueprintVisual: React.FC = () => (
  <svg
    viewBox="0 0 420 260"
    fill="none"
    className="w-full h-auto rounded-xl border border-[#253A32] bg-[#16241F]"
    aria-hidden="true"
  >
    <rect x="16" y="16" width="268" height="228" rx="8" stroke="#2B4239" strokeWidth="1.2" />
    <line x1="16" y1="46" x2="284" y2="46" stroke="#2B4239" strokeWidth="1" />
    <rect x="30" y="27" width="36" height="8" rx="2" fill="#C58F38" />
    <rect x="180" y="28" width="24" height="6" rx="2" fill="#3D5A50" />
    <rect x="212" y="28" width="24" height="6" rx="2" fill="#3D5A50" />
    <rect x="244" y="26" width="28" height="10" rx="2" stroke="#C58F38" strokeWidth="1" />
    <rect x="32" y="66" width="164" height="14" rx="2" fill="#F7F4EE" fillOpacity="0.9" />
    <rect x="32" y="88" width="220" height="8" rx="2" fill="#5D756C" />
    <rect x="32" y="102" width="190" height="8" rx="2" fill="#5D756C" />
    <rect x="32" y="124" width="84" height="24" rx="4" fill="#C58F38" />
    <rect x="32" y="168" width="110" height="58" rx="4" fill="#111C18" stroke="#2B4239" />
    <rect x="154" y="168" width="114" height="58" rx="4" fill="#111C18" stroke="#2B4239" />

    <rect x="304" y="42" width="100" height="202" rx="10" fill="#111C18" stroke="#C58F38" strokeWidth="1.2" />
    <line x1="336" y1="54" x2="372" y2="54" stroke="#2B4239" strokeWidth="2" strokeLinecap="round" />
    <rect x="318" y="72" width="72" height="10" rx="2" fill="#F7F4EE" fillOpacity="0.88" />
    <rect x="318" y="90" width="64" height="6" rx="2" fill="#5D756C" />
    <rect x="318" y="102" width="54" height="6" rx="2" fill="#5D756C" />
    <rect x="318" y="120" width="72" height="20" rx="3" fill="#C58F38" />
    <rect x="318" y="152" width="72" height="34" rx="3" fill="#172620" stroke="#2B4239" />
    <rect x="318" y="194" width="72" height="34" rx="3" fill="#172620" stroke="#2B4239" />
  </svg>
);

export const SeoHierarchyVisual: React.FC = () => (
  <svg
    viewBox="0 0 420 260"
    fill="none"
    className="w-full h-auto rounded-xl border border-[#253A32] bg-[#16241F]"
    aria-hidden="true"
  >
    <rect x="150" y="24" width="120" height="34" rx="6" fill="#111C18" stroke="#C58F38" strokeWidth="1.4" />
    <rect x="172" y="37" width="76" height="8" rx="2" fill="#F7F4EE" fillOpacity="0.9" />
    <path d="M210 58V84M86 84H334M86 84V104M210 84V104M334 84V104" stroke="#456157" strokeWidth="1.4" />
    <rect x="36" y="104" width="100" height="32" rx="4" fill="#111C18" stroke="#2B4239" />
    <rect x="52" y="116" width="68" height="7" rx="2" fill="#C58F38" />
    <rect x="160" y="104" width="100" height="32" rx="4" fill="#111C18" stroke="#2B4239" />
    <rect x="176" y="116" width="68" height="7" rx="2" fill="#C58F38" />
    <rect x="284" y="104" width="100" height="32" rx="4" fill="#111C18" stroke="#2B4239" />
    <rect x="300" y="116" width="68" height="7" rx="2" fill="#C58F38" />
    <rect x="36" y="160" width="348" height="76" rx="6" fill="#111C18" stroke="#253A32" />
    <path
      d="M56 218C106 214 146 208 188 196C232 184 282 178 360 170"
      stroke="#C58F38"
      strokeWidth="2.2"
    />
    <circle cx="188" cy="196" r="3" fill="#F7F4EE" />
    <circle cx="282" cy="179" r="3" fill="#F7F4EE" />
    <circle cx="360" cy="170" r="4" fill="#C58F38" />
  </svg>
);
