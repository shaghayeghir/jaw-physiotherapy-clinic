import * as React from "react";
import type { IconProps } from "./types";

export function HandsHeartIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}

      {/* heart */}
      <path
        d="M12 8.8c-1.2-1.7-4.1-1.9-5.5-.3-1.4 1.6-.9 4 1 5.6L12 17.5l4.5-3.4c1.9-1.6 2.4-4 1-5.6-1.4-1.6-4.3-1.4-5.5.3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* hands */}
      <path
        d="M3.5 14.5l3.2-2.1c.7-.5 1.6-.4 2.2.2l1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 14.5l-3.2-2.1c-.7-.5-1.6-.4-2.2.2l-1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.2 19.5h5.8M12 19.5h5.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
