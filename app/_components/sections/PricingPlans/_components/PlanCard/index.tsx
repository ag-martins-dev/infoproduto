import { Check } from "lucide-react";

import { Button } from "@/app/_components/common/Button";
import { CTA_ID } from "@/app/_constants/cta-buy-now-id";
import { planFeatures } from "@/app/_constants/plan-features";
import { numberToBrl } from "@/app/_utils/number-to-brl";

export const PlanCard = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 rounded-3xl border border-slate-300 bg-white p-5 shadow-xl shadow-slate-300/40 md:w-2/3 lg:w-2/6">
      <h4 className="text-center text-2xl font-black text-slate-900 md:text-3xl">
        Acesso completo
      </h4>

      <div>
        <div className="flex flex-col items-center justify-center gap-1">
          <s className="text-slate-500">{numberToBrl(47)}</s>
          <b className="text-6xl font-black text-green-500 md:text-7xl">
            {numberToBrl(10)}
          </b>
          <p className="text-sm text-slate-500 md:text-base">
            pagamento único.
          </p>
          <b className="text-sm text-green-500 md:text-base">
            Você economiza {numberToBrl(37)}!
          </b>
        </div>
      </div>

      <ul className="space-y-5">
        {planFeatures.map(({ id, feature }) => (
          <li
            key={id}
            className="flex items-center gap-2 text-slate-500 md:text-lg"
          >
            <Check className="size-4 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button id={CTA_ID} className="w-full">
        Comprar agora
      </Button>
    </div>
  );
};
