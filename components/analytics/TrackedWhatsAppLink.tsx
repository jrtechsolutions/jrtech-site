"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useRef } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type TrackedWhatsAppLinkProps = ComponentPropsWithoutRef<"a"> & {
  location: string;
};

export function TrackedWhatsAppLink({
  location,
  onClick,
  onPointerDown,
  className,
  children,
  ...props
}: TrackedWhatsAppLinkProps) {
  const lastTrackedAt = useRef(0);

  const track = () => {
    const now = Date.now();
    // Evita duplicar pointerdown + click no mesmo gesto
    if (now - lastTrackedAt.current < 800) return;
    lastTrackedAt.current = now;
    trackWhatsAppClick(location);
  };

  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      onPointerDown={(event) => {
        track();
        onPointerDown?.(event);
      }}
      onClick={(event) => {
        track();
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
