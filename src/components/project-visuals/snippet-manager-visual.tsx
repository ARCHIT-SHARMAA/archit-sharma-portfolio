import * as React from 'react';
import type { SVGProps } from 'react';

export function SnippetManagerVisual(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="10" width="180" height="100" rx="8" ry="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
      
      <rect x="20" y="20" width="160" height="12" rx="3" fill="hsl(var(--secondary))" />
      <circle cx="28" cy="26" r="3" fill="#FF5F56" />
      <circle cx="40" cy="26" r="3" fill="#FFBD2E" />
      <circle cx="52" cy="26" r="3" fill="#27C93F" />

      <rect x="20" y="40" width="30" height="4" rx="2" fill="hsl(var(--primary))" />
      <rect x="55" y="40" width="60" height="4" rx="2" fill="hsl(var(--foreground))" />
      <rect x="120" y="40" width="20" height="4" rx="2" fill="hsl(var(--accent))" />

      <rect x="20" y="50" width="20" height="4" rx="2" fill="hsl(var(--primary))" />
      <rect x="45" y="50" width="80" height="4" rx="2" fill="hsl(var(--foreground))" />

      <rect x="35" y="60" width="50" height="4" rx="2" fill="hsl(var(--muted-foreground))" />

      <rect x="20" y="75" width="160" height="2" rx="1" fill="hsl(var(--border))" />

      <rect x="20" y="85" width="25" height="8" rx="4" fill="hsl(var(--secondary))" />
      <rect x="50" y="85" width="25" height="8" rx="4" fill="hsl(var(--secondary))" />
      <rect x="80" y="85" width="25" height="8" rx="4" fill="hsl(var(--primary))" opacity="0.5" />
    </svg>
  );
}
