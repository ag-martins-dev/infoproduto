import { CountdownTimer } from "@/app/_components/countdown-timer";

import { PricingCard } from "./components/pricing-card";

export function PricingSection() {
  return (
    <section className="relative z-1 flex flex-col items-center justify-center gap-8 bg-white px-5 py-20">
      <CountdownTimer />

      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h3 className="text-center text-3xl/tight font-bold text-zinc-900 md:text-4xl/tight">
          Guia de{" "}
          <span className="font-black text-rose-500">shapes femininos</span>
        </h3>
        <p className="text-center text-sm/relaxed font-medium text-zinc-500">
          Acesso completo por um único valor.
        </p>
      </div>

      <PricingCard />
    </section>
  );
}
