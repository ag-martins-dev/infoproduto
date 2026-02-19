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
  keywords: [
    "shape feminino",
    "corpo feminino",
    "planilha de treino feminina",
    "treino feminino",
    "transformação",
    "transforme seu corpo",
    "ficha de treino para mulheres",
    "guia de shapes femininos",
  ],
  openGraph: {
    type: "website",
    title: "Shape Ideal - Transforme seu corpo",
    description: "Transforme seu corpo através da nossa planilha!",
    url: `${process.env.BASE_URL}`,
    images: [{ url: `${process.env.BASE_URL}/shapes-banner.avif` }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Shape Ideal - Transforme seu corpo",
    description: "Transforme seu corpo através da nossa planilha!",
    images: [`${process.env.BASE_URL}/shapes-banner.avif`],
  },
  alternates: {
    canonical: `${process.env.BASE_URL}`,
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
