import * as React from "react";
import type { IconProps } from "./types";

export function EarIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M15.5 16.5c0 2.2-1.8 4-4 4-2.5 0-4.5-2-4.5-4.5V11a5.5 5.5 0 0 1 11 0v3.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 17.6c1 0 1.8-.8 1.8-1.8 0-.9-.6-1.6-1.4-1.8-.9-.2-1.5-1-1.5-1.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
