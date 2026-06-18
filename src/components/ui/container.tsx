import * as React from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export function Container({
  children,
  className,
  as: Comp = "div",
}: ContainerProps) {
  return (
    <Comp className={cn("mx-auto w-full max-w-6xl px-4", className)}>
      {children}
    </Comp>
  );
}
