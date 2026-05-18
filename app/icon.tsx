import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
            width: 320,
            height: 320,
            borderRadius: 320,
            background: "linear-gradient(135deg,#4fa3ff,#00e5ff)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 90px rgba(79,163,255,.65)",
          }}
        >
          <div style={{ width: 112, height: 112, borderRadius: 112, background: "#000005" }} />
        </div>
      </div>
    ),
    size,
  );
}
