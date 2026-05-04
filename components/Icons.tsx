import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const base = (props: IconProps) => ({
  width: props.size ?? 24,
  height: props.size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)} {...p}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
);
export const Check = (p: IconProps) => (
  <svg {...base(p)} {...p}><path d="M5 12.5l5 5L20 7" /></svg>
);
export const Sparkle = (p: IconProps) => (
  <svg {...base(p)} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></svg>
);
export const WhatsApp = (p: IconProps) => (
  <svg width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M19.05 4.91A10.05 10.05 0 0 0 11.93 2C6.45 2 2 6.45 2 11.93c0 1.76.46 3.47 1.33 4.99L2 22l5.2-1.36a9.93 9.93 0 0 0 4.73 1.2h.01c5.48 0 9.93-4.45 9.93-9.93a9.87 9.87 0 0 0-2.82-6.99zm-7.12 15.27a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.09.81.83-3.01-.2-.31a8.24 8.24 0 0 1-1.27-4.42c0-4.55 3.7-8.25 8.25-8.25 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.55-3.7 8.25-8.26 8.25zm4.52-6.18c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42l-.48-.01a.94.94 0 0 0-.67.31c-.23.25-.88.86-.88 2.09 0 1.23.9 2.43 1.03 2.6.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.49-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.3z"/>
  </svg>
);
export const Layout = (p: IconProps) => (
  <svg {...base(p)} {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
);
export const CreditCard = (p: IconProps) => (
  <svg {...base(p)} {...p}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h2M11 15h2" /></svg>
);
export const Boxes = (p: IconProps) => (
  <svg {...base(p)} {...p}><path d="M3 7.5l4.5-2.5L12 7.5v5L7.5 15 3 12.5v-5z" /><path d="M12 7.5L16.5 5 21 7.5v5L16.5 15 12 12.5" /><path d="M7.5 15v4l4.5 2.5L16.5 19v-4" /></svg>
);
export const Mail = (p: IconProps) => (
  <svg {...base(p)} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);
export const Search = (p: IconProps) => (
  <svg {...base(p)} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const Calendar = (p: IconProps) => (
  <svg {...base(p)} {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
);
export const Plus = (p: IconProps) => (
  <svg {...base(p)} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Minus = (p: IconProps) => (
  <svg {...base(p)} {...p}><path d="M5 12h14" /></svg>
);
export const Quote = (p: IconProps) => (
  <svg {...base(p)} {...p}><path d="M7 7h4v4H7zM13 7h4v4h-4z" /><path d="M7 11c0 4-2 6-4 6M17 11c0 4-2 6-4 6" /></svg>
);
export const Instagram = (p: IconProps) => (
  <svg {...base(p)} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>
);
export const Phone = (p: IconProps) => (
  <svg {...base(p)} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
);
export const Pin = (p: IconProps) => (
  <svg {...base(p)} {...p}><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const Menu = (p: IconProps) => (
  <svg {...base(p)} {...p}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
);
export const Close = (p: IconProps) => (
  <svg {...base(p)} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);

export const iconMap = {
  Layout, CreditCard, Boxes, Mail, Search, Calendar, ArrowRight, Check, Sparkle,
  WhatsApp, Plus, Minus, Quote, Instagram, Phone, Pin, Menu, Close,
} as const;

export type IconName = keyof typeof iconMap;
