import DiscountTimer from "./_components/DiscountTimer/client";
import { PlanCard } from "./_components/PlanCard";

export const PricingPlansSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-zinc-100 px-5 py-20">
      <DiscountTimer />

      <h3 className="text-center text-2xl/tight font-bold text-zinc-900 md:text-3xl/tight">
        Guia de shapes femininos
      </h3>

      <PlanCard />

      <p className="text-center text-xs/relaxed text-zinc-900/60 md:text-base/relaxed lg:text-sm/relaxed">
        Material educativo. Não substitui acompanhamento profissional.
      </p>
    </section>
  );
};
