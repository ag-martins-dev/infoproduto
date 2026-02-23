"use client";

import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("./countdown"), {
  ssr: false,
});

export function CountdownTimer() {
  return (
    <div className="z-1 flex w-full flex-col items-center justify-center gap-5 rounded-3xl bg-linear-to-br from-rose-400 to-rose-800 p-10 shadow-xl ring ring-rose-300 select-none md:w-3/5 lg:w-2/6">
      <strong className="text-center text-xl/tight font-black text-white md:text-2xl/tight">
        ⏰ Oferta especial expira em:
      </strong>

      <Countdown />
    </div>
  );
}
