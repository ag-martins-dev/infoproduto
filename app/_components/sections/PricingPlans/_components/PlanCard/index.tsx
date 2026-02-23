import { ArrowRight, Check, ShieldCheckIcon } from "lucide-react";

import { Button as ButtonCTA } from "@/app/_components/common/Button";
import { getCallToActionKeys } from "@/app/_constants/call-to-action-keys";
import { planFeatures } from "@/app/_constants/plan-features";
import { numberToBrl } from "@/app/_utils/covert-number-to-brl";

export const PlanCard = () => {
  return (
    <div className="z-1 flex w-full flex-col items-center justify-center gap-8 rounded-3xl bg-white p-10 shadow-xl ring ring-zinc-200 md:w-2/3 lg:w-2/6">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="rounded-full bg-emerald-500/10 px-4 py-1 ring ring-emerald-500/20">
          <p className="text-sm/relaxed text-emerald-500 md:text-base/relaxed">
            🔥 Lançamento
          </p>
        </div>
        <h4 className="text-center text-3xl/tight font-bold text-zinc-900 md:text-4xl/tight">
          Acesso completo
        </h4>
      </div>

      <div className="flex flex-col space-y-6 divide-y divide-zinc-200">
        <div className="pb-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-base/relaxed text-zinc-500 line-through">
              {numberToBrl(47)}
            </p>

            <div className="flex flex-col items-center justify-center">
              <h5 className="text-6xl/tight font-black text-emerald-500 md:text-7xl/tight">
                {numberToBrl(14.99)}
              </h5>
              <p className="text-xs/relaxed text-zinc-500 md:text-sm/relaxed">
                pagamento único.
              </p>
            </div>

            <div className="mt-2 rounded-full bg-emerald-500/10 px-6 py-1 ring ring-emerald-500/20">
              <p className="text-sm/relaxed font-semibold text-emerald-500">
                Você economiza {numberToBrl(47 - 15)}!
              </p>
            </div>
          </div>
        </div>

        <ul className="space-y-5">
          {planFeatures.map(({ id, feature }) => (
            <li key={id} className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-500/10 p-1 ring ring-emerald-500/20">
                <Check className="size-4 text-emerald-500" />
              </div>
              <span className="text-sm/relaxed text-zinc-900 md:text-base/relaxed">
                {feature}
              </span>
            </li>
          ))}

          <li className="flex w-full items-center gap-3 rounded-xl bg-emerald-500/5 p-3 text-sm/relaxed text-zinc-900 ring ring-emerald-500/10 md:text-base/relaxed">
            <div className="rounded-full bg-emerald-500/10 p-1 ring ring-emerald-500/20">
              <Check className="size-4 text-emerald-500" />
            </div>
            Garantia de 7 dias — se não gostar, devolvemos tudo
          </li>
        </ul>
      </div>

      <ButtonCTA
        id={getCallToActionKeys().id}
        href="https://checkout.guiadeshapesfemininos.com/VCCL1O8SCSG9"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2"
      >
        Comprar agora <ArrowRight className="size-5 text-white" />
      </ButtonCTA>

      <p className="flex items-center gap-3 text-xs/relaxed text-zinc-500 md:text-sm/relaxed">
        <ShieldCheckIcon className="size-4 text-zinc-500" />
        Compra 100% segura · Pagamento criptografado
      </p>
    </div>
  );
};
