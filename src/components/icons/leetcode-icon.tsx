import * as React from 'react';
import type { SVGProps } from 'react';

export function LeetCodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 5.844a1.38 1.38 0 0 0-.438.961v10.39a1.38 1.38 0 0 0 .438.962l5.405 5.405a1.373 1.373 0 0 0 .961.438h7.034a1.378 1.378 0 0 0 1.377-1.377V1.377A1.378 1.378 0 0 0 20.517 0h-7.034ZM2.5 2.5h2.5V15h-5V2.5H2.5Z" />
      <path d="M15.42 16.923v-2.599H21.5v2.6h-6.08Zm0-4.095v-2.6h6.08v2.6h-6.08Zm0-4.095V6.133h6.08v2.6h-6.08Z" />
    </svg>
  );
}
