import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const runtime = "edge";
export const alt = "OrbitClick Media | AI Creative & Performance Marketing Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 78% 22%, rgba(0,229,255,.28), transparent 30%), radial-gradient(circle at 12% 78%, rgba(79,163,255,.30), transparent 34%), #000005",
          color: "#f0f4ff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 56,
              background: "linear-gradient(135deg,#4fa3ff,#00e5ff,#a855f7)",
              boxShadow: "0 0 44px rgba(79,163,255,.65)",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div>
          <div style={{ fontSize: 72, lineHeight: 0.98, fontWeight: 800, letterSpacing: -3, maxWidth: 850 }}>
            AI Creative & Performance Marketing Agency
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "rgba(224,235,255,.75)", maxWidth: 900, lineHeight: 1.35 }}>
            Cinematic AI video, motion graphics, branding, SEO, Meta Ads, Google Ads, and web experiences from Hyderabad, India.
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 22, color: "#00e5ff" }}>
          <span>AI Video Production</span>
          <span>•</span>
          <span>Motion Graphics</span>
          <span>•</span>
          <span>Performance Marketing</span>
        </div>
      </div>
    ),
    size,
  );
}
