//src/app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Routing Demo",
  description: "Praktikum Routing Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}