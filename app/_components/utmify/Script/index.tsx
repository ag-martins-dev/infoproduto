import Script from "next/script";

export const UtmifyScript = () => {
  return (
    <Script
      src="https://cdn.utmify.com.br/scripts/utms/latest.js"
      strategy="lazyOnload"
      data-utmify-prevent-xcod-sck
      data-utmify-prevent-subids
    />
  );
};
