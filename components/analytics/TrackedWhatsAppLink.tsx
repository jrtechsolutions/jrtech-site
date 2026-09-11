"use client";

import type { ComponentPropsWithoutRef } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type TrackedWhatsAppLinkProps = ComponentPropsWithoutRef<"a"> & {
  location: string;
};

export function TrackedWhatsAppLink({
  location,
  onClick,
  className,
  children,
  ...props
}: TrackedWhatsAppLinkProps) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      onClick={(event) => {
        trackWhatsAppClick(location);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
