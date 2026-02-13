import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
      <body className={`${poppins.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
