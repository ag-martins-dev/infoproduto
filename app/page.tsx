import { Dumbbell, FileText, Goal, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./_components/common/Button";
import { Header } from "./_components/Header";
import { PricingPlansSection } from "./_components/PricingPlans";
import { CTA_ID } from "./_constants/cta-buy-now-id";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <Header />

      <main>
        {/* Hero/Apresentação */}
        <section className="flex flex-col items-center justify-center gap-8 bg-slate-100 px-5 py-20">
          <h1 className="text-center text-4xl leading-11 font-black text-slate-900">
            Você treina... mas não chega no{" "}
            <span className="text-rose-500">corpo que quer?</span>
          </h1>

          <p className="text-center text-lg leading-[150%] text-slate-500">
            Escolha o shape e siga o treino certo para o seu objetivo. Simples,
            direto e pronto pra usar na academia.
          </p>

          <Button asChild>
            <Link href={`#${CTA_ID}`} prefetch>
              Quero começar agora
            </Link>
          </Button>
        </section>

        {/* Visual Proof/Prova visual */}
        <section className="flex flex-col items-center justify-center bg-white px-5 py-20 md:gap-12">
          <h2 className="text-center text-3xl leading-11 font-black text-slate-900">
            O corpo muda quando o treino tem direção.
          </h2>

          <div className="relative h-60 w-full">
            <Image
              src={"/shapes.png"}
              sizes="100vw"
              alt="Shapes"
              className="object-contain"
              quality={100}
              preload
              fill
            />
          </div>
        </section>

        {/* What you get/O que você recebe */}
        <section className="flex flex-col items-center justify-center gap-14 bg-slate-900 px-5 py-20">
          <h2 className="text-center text-3xl leading-11 font-black text-white">
            O que você recebe:
          </h2>

          {/* Benefits/Benefícios */}
          <div className="space-y-14">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <FileText className="size-12 text-rose-500" />

              <div className="flex w-full flex-col items-center justify-center gap-0.5">
                <b className="text-center text-lg">
                  4 fichas de treino por shape (A/B/C)
                </b>
                <p className="text-center">
                  Organização completa para sua semana
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-4">
              <Dumbbell className="size-12 text-rose-500" />

              <div className="flex w-full flex-col items-center justify-center gap-0.5">
                <b className="text-center text-lg">
                  Exercícios com séries e repetições
                </b>
                <p className="text-center">
                  Tudo pronto para seguir na academia
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-4">
              <Goal className="size-12 text-rose-500" />

              <div className="flex w-full flex-col items-center justify-center gap-0.5">
                <b className="text-center text-lg">Treino com foco no shape</b>
                <p className="text-center">Sem negligenciar o resto do corpo</p>
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-4">
              <Smartphone className="size-12 text-rose-500" />

              <div className="flex w-full flex-col items-center justify-center gap-0.5">
                <b className="text-center text-lg">PDF leve</b>
                <p className="text-center">Abre instanteneamente no celular</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timer */}
        <PricingPlansSection />
      </main>

      <footer className="bg-slate-50 px-5 py-8">
        <p className="text-center text-sm text-slate-900">
          © 2026 Shape Ideal. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
