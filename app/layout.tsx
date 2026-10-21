import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "../styles.css";

export const metadata: Metadata = {
  title: "Orbit by SLAWN — Practise your exam",
  description: "Exam practice for Covenant University courses, built from past questions.",
  icons: { icon: "/orbit-icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"
          strategy="beforeInteractive"
        />
      </head>
      <body className="in-app">{children}</body>
    </html>
  );
}
