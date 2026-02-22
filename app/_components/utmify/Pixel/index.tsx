import Script from "next/script";

export const UtmifyPixel = () => {
  return (
    <>
      <Script
        id="pixel-config"
        strategy="beforeInteractive"
      >{`window.pixelId = "698cd263290ed42e84c17f82"`}</Script>
      <Script
        src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
        strategy="afterInteractive"
      />
    </>
  );
};
