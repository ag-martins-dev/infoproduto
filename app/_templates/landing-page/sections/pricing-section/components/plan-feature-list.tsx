import { CheckIcon } from "lucide-react";

import { planFeatures } from "@/app/_constants/plan-features";

import { PlanFeatureItem } from "./plan-feature-item";

export function PlanFeatureList() {
  return (
    <ul className="space-y-5">
      {planFeatures.map(({ id, feature }) => (
        <PlanFeatureItem key={id} feature={feature} />
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
  );
}
