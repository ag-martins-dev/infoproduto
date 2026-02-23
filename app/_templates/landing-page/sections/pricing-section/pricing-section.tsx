import { ArrowRight, Check, CheckIcon, ShieldCheckIcon } from "lucide-react";

import * as CallToActionButton from "@/app/_components/common/call-to-action-button";
import { CountdownTimer } from "@/app/_components/countdown-timer";
import { getCallToActionKeys } from "@/app/_constants/call-to-action-keys";
import { planFeatures } from "@/app/_constants/plan-features";
import { convertNumberToBRL } from "@/app/_utils/covert-number-to-brl";

import { CardBadge } from "./components/card-badge";

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

      <div className="z-1 flex w-full flex-col items-center justify-center gap-8 rounded-3xl bg-white p-10 shadow-xl ring ring-zinc-200 md:w-2/3 lg:w-2/6">
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <CardBadge text="🔥 Lançamento" />

          <h4 className="text-center text-3xl/tight font-bold text-zinc-900 md:text-4xl/tight">
            Acesso completo
          </h4>
        </div>

        <div className="flex flex-col space-y-6 divide-y divide-zinc-200">
          <div className="pb-6">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-base/relaxed text-zinc-500 line-through">
                {convertNumberToBRL(47)}
              </p>

              <div className="flex flex-col items-center justify-center">
                <h5 className="text-6xl/tight font-black text-emerald-500 md:text-7xl/tight">
                  {convertNumberToBRL(14.99)}
                </h5>
                <p className="text-xs/relaxed text-zinc-500 md:text-sm/relaxed">
                  pagamento único.
                </p>
              </div>

              <CardBadge
                text={`Você economiza ${convertNumberToBRL(47 - 15)}!`}
              />
            </div>
          </div>

          <ul className="space-y-5">
            {planFeatures.map(({ id, feature }) => (
              <li key={id} className="flex items-center gap-3">
                <div className="rounded-full bg-emerald-500/10 p-1 ring ring-emerald-500/20">
                  <Check className="size-4 text-emerald-500" />
                </div>

                <p className="text-sm/relaxed text-zinc-900 lg:text-base/relaxed">
                  {feature}
                </p>
              </li>
            ))}

            <div className="flex w-full items-center gap-3 rounded-xl bg-emerald-500/5 p-3 ring ring-emerald-500/10">
              <div className="rounded-full bg-emerald-500/10 p-1 ring ring-emerald-500/20">
                <CheckIcon className="size-4 text-emerald-500" />
              </div>
              <p className="text-sm/relaxed text-zinc-900 lg:text-base/relaxed">
                Garantia de 7 dias — se não gostar, devolvemos tudo
              </p>
            </div>
          </ul>
        </div>

        <CallToActionButton.Root
          id={getCallToActionKeys().id}
          href="https://checkout.guiadeshapesfemininos.com/VCCL1O8SCSG9"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <CallToActionButton.Label text="Comprar agora" />
          <CallToActionButton.Icon>
            <ArrowRight className="size-5 text-white" />
          </CallToActionButton.Icon>
        </CallToActionButton.Root>

        <div className="flex items-center justify-center gap-3">
          <ShieldCheckIcon className="size-4 text-zinc-500" />
          <p className="text-xs/relaxed text-zinc-500 md:text-sm/relaxed">
            Compra 100% segura · Pagamento criptografado
          </p>
        </div>
      </div>
    </section>
  );
}
