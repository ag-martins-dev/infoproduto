import { DiscountTimer } from "./_components/DiscountTimer";
import { PlanCard } from "./_components/PlanCard";

export const PricingPlansSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-slate-100 px-5 py-20">
      <DiscountTimer />

      <h3 className="text-center text-2xl font-black text-slate-900 md:text-4xl">
        Guia de shapes femininos
      </h3>

      <PlanCard />

      <p className="text-center text-xs text-slate-500 md:text-base lg:text-sm">
        Material educativo. Não substitui acompanhamento profissional.
      </p>
    </section>
  );
};
