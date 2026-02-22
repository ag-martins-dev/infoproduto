import Script from "next/script";

export const UtmifyPixel = () => {
  return (
    <Script
      id="utmify-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.pixelId = "698cd263290ed42e84c17f82";
          var a = document.createElement("script");
          a.setAttribute("async", "");
          a.setAttribute("defer", "");
          a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
          document.head.appendChild(a);
        `,
      }}
    />
  );
};
