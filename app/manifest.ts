import { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    lang: "pt-BR",
    name: "Shape Ideal - Transforme seu corpo",
    short_name: "Shape Ideal",
    description: "Transforme seu corpo através da nossa planilha!",
    display: "standalone",
    start_url: "/",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "<generated>",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
};

export default manifest;
