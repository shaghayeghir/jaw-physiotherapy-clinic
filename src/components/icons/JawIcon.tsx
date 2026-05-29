import * as React from "react";
import type { IconProps } from "./types";

export function JawIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M6.5 10.5c.5-3.5 3.3-6 6.8-6 3.7 0 6.7 2.9 6.7 6.6v1.4c0 2.5-2 4.5-4.5 4.5h-2.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9.2 18.5h4.3c1.6 0 2.8-1.3 2.8-2.8 0-1.6-1.3-2.8-2.8-2.8H9.2c-1.6 0-2.8 1.3-2.8 2.8 0 1.6 1.3 2.8 2.8 2.8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 15.7h2.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
