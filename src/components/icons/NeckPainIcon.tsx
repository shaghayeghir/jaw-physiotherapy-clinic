import * as React from "react";
import type { IconProps } from "./types";

export function NeckPainIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M12 3.5c2.5 0 4.5 2 4.5 4.5S14.5 12.5 12 12.5 7.5 10.5 7.5 8 9.5 3.5 12 3.5z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 12.2c.1 2.2.7 3.2 1.7 4 .8.6 1 1.3 1 2.3V21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15.5 12.2c-.1 2.2-.7 3.2-1.7 4-.8.6-1 1.3-1 2.3V21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17.5 14.5l2 2M17.5 16.5l2-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
