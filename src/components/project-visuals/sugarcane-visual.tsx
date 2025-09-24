import * as React from 'react';
import type { SVGProps } from 'react';

export function SugarcaneVisual(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="10" width="180" height="100" rx="8" ry="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
      
      <path d="M50 100 V 40 Q 50 30, 60 30" stroke="#8c6d3f" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M46 70 h 8" stroke="#6b532d" strokeWidth="2" />
      <path d="M46 85 h 8" stroke="#6b532d" strokeWidth="2" />
      <path d="M60 30 Q 70 30, 70 40 L 80 20" stroke="#4caf50" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M60 30 Q 50 30, 50 40 L 40 20" stroke="#4caf50" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      <rect x="90" y="30" width="90" height="60" rx="4" fill="hsl(var(--secondary))" />
      
      <path d="M100 80 C 110 70, 120 75, 130 60 S 150 40, 160 50" stroke="hsl(var(--primary))" fill="none" strokeWidth="2" />
      <circle cx="100" cy="80" r="2" fill="hsl(var(--primary))" />
      <circle cx="130" cy="60" r="2" fill="hsl(var(--primary))" />
      <circle cx="160" cy="50" r="2" fill="hsl(var(--primary))" />

      <rect x="95" y="35" width="20" height="4" rx="2" fill="hsl(var(--accent))" />
      <rect x="120" y="35" width="40" height="4" rx="2" fill="hsl(var(--muted-foreground))" />
    </svg>
  );
}
