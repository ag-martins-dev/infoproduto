import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shape Ideal - Transforme seu Corpo",
  description: "Transforme seu corpo através da nossa planilha!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} ${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
