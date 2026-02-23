import { convertNumberToBRL } from "@/app/_utils/convert-number-to-brl";

import { CardBadge } from "./card-badge";

export function PricingCardDisplay() {
  return (
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

        <CardBadge text={`Você economiza ${convertNumberToBRL(47 - 15)}!`} />
      </div>
    </div>
  );
}
