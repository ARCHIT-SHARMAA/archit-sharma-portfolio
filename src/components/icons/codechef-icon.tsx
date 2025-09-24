import * as React from 'react';
import type { SVGProps } from 'react';

export function CodechefIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 8.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM14.5 20.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM5.5 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z" />
      <path d="M14.5 6v9.5M5.5 12H12" />
    </svg>
  );
}
