import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/vendor/pastel-retroware/tokens/styles.css";
import "@/vendor/pastel-retroware/ui/styles.css";

import { PortfolioShell } from "@/components/portfolio-shell";
import { themeClassNames } from "@/lib/pastel-retroware";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DeepLearningDev // Retro OS Portfolio",
    template: "%s | DeepLearningDev",
  },
  description:
    "Retro-futuristic portfolio website for DeepLearningDev, built as a consumer of pastel-retroware-ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body
        className={`${themeClassNames.cyberRetro} min-h-full bg-background font-sans text-foreground antialiased`}
      >
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
