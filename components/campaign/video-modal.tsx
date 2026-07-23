"use client";

/* Demo-video modal. Plays a supplied video URL (mp4 or embeddable iframe URL);
   shows a clearly-marked placeholder when no video is configured yet. */

import { Modal } from "./modal";

const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";
const SIGNAL = "#ED510C";
const SURFACE = "#101216";
const BORDER_D = "rgba(244,245,247,0.14)";
const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

function isEmbed(url: string) {
  return /youtube\.com|youtu\.be|vimeo\.com|player\./.test(url);
}

export function VideoModal({
  videoUrl,
  onClose,
}: {
  videoUrl?: string;
  onClose: () => void;
}) {
  return (
    <Modal label="Demo video" onClose={onClose} maxWidth={880}>
      <div style={{ padding: 20 }}>
        <span style={{ display: "block", fontFamily: mono, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL, marginBottom: 14 }}>
          Demo
        </span>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            background: SURFACE,
            border: `1px solid ${BORDER_D}`,
            borderRadius: 8,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {videoUrl ? (
            isEmbed(videoUrl) ? (
              <iframe
                src={videoUrl}
                title="Demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            ) : (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video src={videoUrl} controls autoPlay style={{ width: "100%", height: "100%", objectFit: "contain", background: "#000" }} />
            )
          ) : (
            <div style={{ textAlign: "center", padding: 24 }}>
              <span style={{ display: "block", fontFamily: sans, fontSize: 22, fontWeight: 600, color: TXT_D1 }}>
                Demo video coming soon
              </span>
              <span style={{ display: "block", marginTop: 8, fontFamily: sans, fontSize: 15, color: TXT_D2 }}>
                A walkthrough will be added here shortly.
              </span>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
