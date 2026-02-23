import { CardBadge } from "./card-badge";
import { PricingCardCallToAction } from "./card-call-to-action";
import { PricingCardDisplay } from "./card-display";
import { PlanFeatureList } from "./plan-feature-list";

export function PricingCard() {
  return (
    <div className="z-1 flex w-full flex-col items-center justify-center gap-8 rounded-3xl bg-white p-10 shadow-xl ring ring-zinc-200 md:w-2/3 lg:w-2/6">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <CardBadge text="🔥 Lançamento" />
        <h4 className="text-center text-3xl/tight font-bold text-zinc-900 md:text-4xl/tight">
          Acesso completo
        </h4>
      </div>

      <div className="flex flex-col space-y-6 divide-y divide-zinc-200">
        <PricingCardDisplay />
        <PlanFeatureList />
      </div>

      <PricingCardCallToAction />
    </div>
  );
}
