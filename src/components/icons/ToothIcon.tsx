import * as React from "react";
import type { IconProps } from "./types";

export function ToothIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d="M8 4.5c1-.6 2.4-1 4-1s3 .4 4 1c1.3.8 2 2.2 2 3.9 0 2-.9 3.4-2 4.5-.9.9-1.2 2.3-1.4 3.6-.2 1.3-.6 2.5-1.7 2.5-1.2 0-1.3-1.6-1.6-2.8-.3-1-.7-1.6-1.3-1.6s-1 .6-1.3 1.6c-.3 1.2-.4 2.8-1.6 2.8-1.1 0-1.5-1.2-1.7-2.5-.2-1.3-.5-2.7-1.4-3.6-1.1-1.1-2-2.5-2-4.5C6 6.7 6.7 5.3 8 4.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
