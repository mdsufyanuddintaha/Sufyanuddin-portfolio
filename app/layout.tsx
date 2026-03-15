import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sufyan",
  description: "Building high-performance web applications with modern technologies.",
    icons: {
    icon: "/boy.png",
  },
  keywords: ["developer", "fullstack", "react", "nextjs", "typescript"],
  openGraph: {
    title: "Sufyan — Software Engineer",
    description: "Building high-performance web applications with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050505] text-fg antialiased noise-bg">
        {children}
      </body>
    </html>
  );
}
