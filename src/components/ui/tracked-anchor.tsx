"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackEvent } from "@/lib/tracking";

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: "phone_click" | "email_click";
  eventPayload?: Record<string, string>;
};

export function TrackedAnchor({ eventName, eventPayload, onClick, ...props }: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent(eventName, eventPayload);
        onClick?.(event);
      }}
    />
  );
}
