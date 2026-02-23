import { Check } from "lucide-react";
import { memo } from "react";

type PlanFeatureItemProps = {
  feature: string;
};

export const PlanFeatureItem = memo(function PlanFeatureItem({
  feature,
}: PlanFeatureItemProps) {
  return (
    <li className="flex items-center gap-3">
      <div className="rounded-full bg-emerald-500/10 p-1 ring ring-emerald-500/20">
        <Check className="size-4 text-emerald-500" />
      </div>

      <p className="text-sm/relaxed text-zinc-900 lg:text-base/relaxed">
        {feature}
      </p>
    </li>
  );
});
