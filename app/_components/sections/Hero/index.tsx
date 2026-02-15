import { CTA_ID } from "@/app/_constants/cta-buy-now-id";

import { Button } from "../../common/Button";
import { CausesToBuy } from "./_components/CausesToBuy";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-zinc-100 px-5 py-20">
      <h1 className="text-center text-4xl/tight font-bold text-zinc-900 md:w-4/5 md:text-5xl/tight lg:w-5/12">
        Você treina... mas não chega no{" "}
        <span className="text-rose-500">corpo que quer?</span>
      </h1>

      <p className="text-center text-lg/relaxed text-zinc-900/60 md:w-4/5 md:text-base lg:w-2/6">
        Escolha o shape e siga o treino certo para o seu objetivo. Simples,
        direto e pronto pra usar na academia.
      </p>

      <Button asChild>
        <a href={`#${CTA_ID}`}>Quero começar agora</a>
      </Button>

      <div className="mt-5 flex w-full flex-col items-center justify-center gap-8 md:w-5/12">
        <h2 className="text-center text-3xl/tight font-bold text-zinc-900 md:text-4xl/tight">
          Para quem é esse guia
        </h2>

        <CausesToBuy />
      </div>
    </section>
  );
};
