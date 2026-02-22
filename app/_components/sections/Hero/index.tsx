import { ArrowDown } from "lucide-react";

import { CTA_HREF } from "@/app/_constants/cta-id-href";

import { Button } from "../../common/Button";

export const HeroSection = () => {
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

      <Button href={CTA_HREF} className="z-2 flex items-center gap-2">
        Quero começar agora <ArrowDown className="size-5" />
      </Button>

      <div className="flex w-full items-center justify-center gap-2">
        <div className="flex items-center -space-x-3">
          <div className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-pink-500 p-1.5 text-xs/relaxed font-semibold md:size-8">
            AG
          </div>

          <div className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-blue-500 p-1.5 text-xs/relaxed font-semibold md:size-8">
            MC
          </div>

          <div className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-emerald-500 p-1.5 text-xs/relaxed font-semibold md:size-8">
            AM
          </div>

          <div className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-amber-500 p-1.5 text-xs/relaxed font-semibold md:size-8">
            LG
          </div>
        </div>

        <p className="text-xs/relaxed text-zinc-500 md:text-base/relaxed">
          <b className="text-zinc-900">+2.400 pessoas</b> já estão no shape
          correto.
        </p>
      </div>
    </section>
  );
};
