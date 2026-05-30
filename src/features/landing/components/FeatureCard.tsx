import { cn } from "@/lib/cn";
import * as React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
        "dark:border-zinc-800 dark:bg-zinc-950",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl border border-zinc-200/70 bg-zinc-50 p-3 text-[#d8a194] transition group-hover:bg-white dark:border-zinc-800 dark:bg-zinc-900">
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
