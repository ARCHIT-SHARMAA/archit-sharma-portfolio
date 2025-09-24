import * as React from 'react';
import type { SVGProps } from 'react';

export function TrafficLightVisual(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <filter id="street-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
      
      <rect x="0" y="0" width="200" height="120" fill="hsl(var(--secondary))" />
      <path d="M0,80 Q 100,70 200,80 L 200,120 L 0,120 Z" fill="hsl(var(--muted))" />
      
      <rect x="85" y="10" width="30" height="80" rx="5" fill="#333" />
      <circle cx="100" cy="30" r="10" fill="#f00" opacity="0.3" />
      <circle cx="100" cy="55" r="10" fill="#ff0" opacity="0.3" />
      <circle cx="100" cy="80" r="10" fill="#0f0" opacity="1" />
      
      <rect x="80" y="5" width="40" height="90" rx="8" stroke="hsl(var(--accent))" strokeWidth="2.5" fill="none" strokeDasharray="4 4" />
      
      <text x="130" y="25" fill="hsl(var(--accent-foreground))" fontSize="10" fontWeight="bold" style={{filter: 'drop-shadow(0 0 1px black)'}}>Green</text>
      <text x="130" y="38" fill="hsl(var(--accent-foreground))" fontSize="8" style={{filter: 'drop-shadow(0 0 1px black)'}}>Conf: 98%</text>
    </svg>
  );
}
