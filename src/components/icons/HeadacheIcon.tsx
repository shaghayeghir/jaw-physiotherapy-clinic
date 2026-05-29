import * as React from "react";
import type { IconProps } from "./types";

export function HeadacheIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M7 13.5a5 5 0 0 1 10 0V18a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3v-4.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 12.2V10a4 4 0 0 1 8 0v2.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 10.5l-1-1M18 10.5l1-1M12 7V5.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
