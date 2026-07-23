"use client";

/* Shared dialog shell for campaign modals. Mirrors the blog PostModal pattern:
   role="dialog", aria-modal, Esc-to-close, backdrop click, body-scroll lock. */

import { useEffect, type ReactNode } from "react";

const DARK = "#0A0B0E";
const TXT_D1 = "#F4F5F7";
const BORDER_D = "rgba(244,245,247,0.14)";
const mono = "var(--font-plex-mono)";

export function Modal({
  label,
  onClose,
  children,
  maxWidth = 560,
}: {
  label: string;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: number;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 150,
        background: "rgba(5,6,8,0.82)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        overflowY: "auto",
        padding: "48px 16px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth,
          background: DARK,
          border: `1px solid ${BORDER_D}`,
          borderRadius: 12,
          boxSizing: "border-box",
          height: "fit-content",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="cursor-pointer bg-transparent hover:opacity-70"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 1,
            width: 34,
            height: 34,
            borderRadius: "50%",
            border: `1px solid ${BORDER_D}`,
            background: DARK,
            color: TXT_D1,
            fontFamily: mono,
            fontSize: 15,
          }}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
