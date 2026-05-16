import type { ReactNode } from "react";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/seo";
import "./globals.css";

export { metadata } from "./metadata";
export { viewport } from "./viewport";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-space-mono",
  preload: true,
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <noscript>
          <div className="noscript-copy">
            {siteConfig.name} is an AI creative and performance marketing agency in Hyderabad, India.
          </div>
        </noscript>
      </body>
    </html>
  );
}
