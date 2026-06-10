import * as React from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-[#d8a194]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-500 sm:text-3xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
