import * as React from 'react';
import type { SVGProps } from 'react';

export function BankingSystemVisual(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="10" width="180" height="100" rx="8" ry="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
      <rect x="20" y="20" width="40" height="80" rx="4" ry="4" fill="hsl(var(--secondary))" />
      <rect x="25" y="28" width="30" height="4" rx="2" fill="hsl(var(--muted-foreground))" />
      <rect x="25" y="38" width="30" height="4" rx="2" fill="hsl(var(--muted-foreground))" opacity="0.6" />
      <rect x="25" y="48" width="30" height="4" rx="2" fill="hsl(var(--muted-foreground))" opacity="0.6" />
      <rect x="25" y="58" width="30" height="4" rx="2" fill="hsl(var(--muted-foreground))" opacity="0.6" />
      
      <rect x="70" y="20" width="110" height="20" rx="4" ry="4" fill="hsl(var(--secondary))" />
      <circle cx="82" cy="30" r="5" fill="hsl(var(--primary))" />
      <rect x="92" y="28" width="40" height="4" rx="2" fill="hsl(var(--muted-foreground))" />

      <rect x="70" y="50" width="50" height="40" rx="4" ry="4" fill="hsl(var(--secondary))" />
      <rect x="75" y="58" width="40" height="4" rx="2" fill="hsl(var(--muted-foreground))" />
      <rect x="75" y="70" width="25" height="8" rx="2" fill="hsl(var(--primary))" opacity="0.8" />

      <rect x="130" y="50" width="50" height="40" rx="4" ry="4" fill="hsl(var(--secondary))" />
      <rect x="135" y="58" width="40" height="4" rx="2" fill="hsl(var(--muted-foreground))" />
      <rect x="135" y="70" width="25" height="8" rx="2" fill="hsl(var(--accent))" opacity="0.8" />
    </svg>
  );
}
