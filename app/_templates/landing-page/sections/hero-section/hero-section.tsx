import { ArrowDown } from "lucide-react";

import * as CallToActionButton from "@/app/_components/common/call-to-action-button";
import { getCallToActionKeys } from "@/app/_constants/call-to-action-keys";

import { SocialProof } from "./components/social-proof";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-8 overflow-hidden bg-zinc-100 px-5 py-20 before:absolute before:top-20 before:left-60 before:z-0 before:block before:size-80 before:rounded-full before:bg-rose-500/15 before:blur-[80px] before:content-[''] after:absolute after:right-60 after:bottom-20 after:z-0 after:block after:size-80 after:rounded-full after:bg-emerald-500/15 after:blur-[80px] after:content-['']">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <h1 className="z-2 text-center text-4xl/tight font-bold text-zinc-900 md:w-4/5 md:text-5xl/tight lg:w-5/12">
          Você treina... mas não chega no{" "}
          <span className="font-black text-rose-500">corpo que quer?</span>
        </h1>
        <p className="z-2 text-center text-base/relaxed font-medium text-zinc-500 md:w-4/5 lg:w-5/12">
          Escolha o shape e siga o treino certo para o seu objetivo. Simples,
          direto e pronto pra usar em qualquer academia.
        </p>
      </div>

      <CallToActionButton.Root href={getCallToActionKeys().href}>
        <CallToActionButton.Label text="Quero começar agora" />
        <CallToActionButton.Icon>
          <ArrowDown className="size-5" />
        </CallToActionButton.Icon>
      </CallToActionButton.Root>

      <SocialProof />
    </section>
  );
}
