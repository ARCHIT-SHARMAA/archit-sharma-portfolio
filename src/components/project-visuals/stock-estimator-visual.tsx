import * as React from 'react';
import type { SVGProps } from 'react';

export function StockEstimatorVisual(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="10" width="180" height="100" rx="5" ry="5" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
      
      <path d="M 20 90 L 50 70 L 80 80 L 110 50 L 140 60 L 170 40" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
      <path d="M 170 40 L 190 50" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="4 2" fill="none" />

      <line x1="20" y1="10" x2="20" y2="110" stroke="hsl(var(--border))" strokeWidth="1" />
      <line x1="10" y1="100" x2="200" y2="100" stroke="hsl(var(--border))" strokeWidth="1" />
      
      <circle cx="50" cy="70" r="2" fill="hsl(var(--primary))" />
      <circle cx="80" cy="80" r="2" fill="hsl(var(--primary))" />
      <circle cx="110" cy="50" r="2" fill="hsl(var(--primary))" />
      <circle cx="140" cy="60" r="2" fill="hsl(var(--primary))" />
      <circle cx="170" cy="40" r="2" fill="hsl(var(--primary))" />
    </svg>
  );
}
