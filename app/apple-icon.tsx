import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000005",
        }}
      >
        <div
          style={{
            width: 118,
            height: 118,
            borderRadius: 118,
            background: "linear-gradient(135deg,#4fa3ff,#00e5ff)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 44px rgba(79,163,255,.65)",
          }}
        >
          <div style={{ width: 42, height: 42, borderRadius: 42, background: "#000005" }} />
        </div>
      </div>
    ),
    size,
  );
}
