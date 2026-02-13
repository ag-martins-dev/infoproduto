import Link from "next/link";

import { CTA_ID } from "@/app/_constants/cta-buy-now-id";

import { Button } from "../../common/Button";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-slate-100 px-5 py-20">
      <h1 className="text-center text-4xl leading-11 font-black text-slate-900 md:w-4/5 md:text-6xl md:leading-16 lg:w-5/12">
        Você treina... mas não chega no{" "}
        <span className="text-rose-500">corpo que quer?</span>
      </h1>

      <p className="text-center text-lg leading-[150%] text-slate-500 md:w-4/5 md:text-base lg:w-2/6">
        Escolha o shape e siga o treino certo para o seu objetivo. Simples,
        direto e pronto pra usar na academia.
      </p>

      <Button className="text-base" asChild>
        <Link href={`#${CTA_ID}`} prefetch>
          Quero começar agora
        </Link>
      </Button>
    </section>
  );
};
