import { ArrowRightIcon, ShieldCheckIcon } from "lucide-react";

import * as CallToActionButton from "@/app/_components/common/call-to-action-button";
import { getCallToActionKeys } from "@/app/_constants/call-to-action-keys";

export function PricingCardCallToAction() {
  return (
    <>
      <CallToActionButton.Root
        id={getCallToActionKeys().id}
        href="https://checkout.guiadeshapesfemininos.com/VCCL1O8SCSG9"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <CallToActionButton.Label text="Comprar agora" />
        <CallToActionButton.Icon>
          <ArrowRightIcon className="size-5 text-white" />
        </CallToActionButton.Icon>
      </CallToActionButton.Root>

      <div className="flex items-center justify-center gap-3">
        <ShieldCheckIcon className="size-4 text-zinc-500" />
        <p className="text-xs/relaxed text-zinc-500 md:text-sm/relaxed">
          Compra 100% segura · Pagamento criptografado
        </p>
      </div>
    </>
  );
}
