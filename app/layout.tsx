import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shape Ideal - Transforme seu Corpo",
  description: "Transforme seu corpo através da nossa planilha!",
  keywords: ["shape", "corpo", "planilha", "treino", "transformação"],
  openGraph: {
    type: "website",
    siteName: "Shape Ideal",
    title: "Shape Ideal - Transforme seu corpo!",
  },
  robots: {
    index: true,
    notranslate: true,
    googleBot: {
      index: true,
      notranslate: true,
    },
  },
  appleWebApp: {
    title: "Shape Ideal - Transforme seu corpo!",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${interFont.className} ${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
