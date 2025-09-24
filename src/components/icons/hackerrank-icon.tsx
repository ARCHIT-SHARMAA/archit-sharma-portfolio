import * as React from 'react';
import type { SVGProps } from 'react';

export function HackerRankIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M7 3v18h3V15h4v6h3V3h-3v7H10V3H7z" />
    </svg>
  );
}
