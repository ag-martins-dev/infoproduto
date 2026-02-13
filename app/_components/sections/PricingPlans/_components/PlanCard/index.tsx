import { Check } from "lucide-react";

import { Button } from "@/app/_components/common/Button";
import { CTA_ID } from "@/app/_constants/cta-buy-now-id";
import { planFeatures } from "@/app/_constants/plan-features";
import { numberToBrl } from "@/app/_utils/number-to-brl";

export const PlanCard = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 rounded-2xl bg-white p-10 shadow-xl ring shadow-zinc-300/60 ring-zinc-300/50 md:w-2/3 lg:w-2/6">
      <h4 className="text-center text-2xl/tight font-bold text-zinc-900 md:text-3xl/tight">
        Acesso completo
      </h4>

      <div>
        <div className="flex flex-col items-center justify-center gap-1">
          <s className="text-base/relaxed text-zinc-900/60">
            {numberToBrl(47)}
          </s>
          <b className="text-6xl/tight font-bold text-emerald-500 md:text-7xl/tight">
            {numberToBrl(14.99)}
          </b>
          <p className="text-sm/relaxed text-zinc-900/60 md:text-base/relaxed">
            pagamento único.
          </p>
          <b className="text-sm/relaxed text-emerald-500 md:text-base">
            Você economiza {numberToBrl(47 - 15)}!
          </b>
        </div>
      </div>

      <ul className="space-y-5">
        {planFeatures.map(({ id, feature }) => (
          <li key={id} className="flex items-center gap-2">
            <Check className="size-5 text-emerald-500" />
            <span className="text-base/relaxed text-zinc-900/60 md:text-lg/relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button id={CTA_ID} className="w-full">
        Comprar agora
      </Button>
    </div>
  );
};
