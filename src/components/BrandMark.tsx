import React from 'react';

interface BrandMarkProps {
  variant?: 'on-light' | 'on-dark';
  compact?: boolean;
  wordmark?: string;
}

/**
 * Custom geometric KM monogram + wordmark for Khan Marketings.
 */
export const BrandMark: React.FC<BrandMarkProps> = ({
  variant = 'on-light',
  compact = false,
  wordmark = 'Khan Marketings',
}) => {
  const isDarkBg = variant === 'on-dark';
  const frameBg = isDarkBg ? '#172620' : '#111C18';
  const frameStroke = isDarkBg ? '#2B4239' : '#253A32';
  const textColor = isDarkBg ? 'text-[#F7F4EE]' : 'text-[#111C18]';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="8"
          fill={frameBg}
          stroke={frameStroke}
          strokeWidth="1.5"
        />
        <path
          d="M11 33V15"
          stroke="#F7F4EE"
          strokeWidth="2.6"
          strokeLinecap="square"
        />
        <path
          d="M21 15L12.8 23.8L21.5 33"
          stroke="#F7F4EE"
          strokeWidth="2.6"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M25.5 33V16.5L31.75 26.5L38 16.5V33"
          stroke="#C58F38"
          strokeWidth="2.6"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <rect x="30.6" y="10.8" width="2.4" height="2.4" fill="#C58F38" />
      </svg>
      {!compact && (
        <span
          className={`text-[1.0625rem] font-semibold tracking-tight whitespace-nowrap ${textColor}`}
        >
          {wordmark}
        </span>
      )}
    </span>
  );
};
