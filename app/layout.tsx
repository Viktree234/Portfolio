import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Tobokebi Victory | Frontend Developer Portfolio",
  description: "Frontend Developer portfolio - Discover projects focused on polished interfaces, clear user journeys, and high-performance web products.",
  keywords: ["frontend", "developer", "portfolio", "web development", "React", "TypeScript"],
  authors: [{ name: "Tobokebi Victory" }],
  openGraph: {
    title: "Tobokebi Victory | Frontend Developer Portfolio",
    description: "Explore my web development projects and case studies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
