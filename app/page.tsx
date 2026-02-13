import { Check, Dumbbell, FileText, Goal, Smartphone } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-screen w-full bg-white">
      {/* Header */}
      <header className="z-99 flex h-11 w-full items-center justify-center bg-slate-900">
        <p className="text-center font-bold uppercase">
          Oferta de lançamento - Acesso imediato
        </p>
      </header>

      <main>
        {/* Hero/Apresentação */}
        <section className="flex flex-col items-center justify-center gap-8 bg-slate-100 px-5 py-20">
          <h1 className="text-center text-4xl leading-11 font-black text-slate-900">
            Você treina... mas não chega no{" "}
            <span className="text-rose-500">corpo que quer?</span>
          </h1>

          <p className="text-center text-lg text-slate-700">
            Escolha o shape e siga o treino certo para o seu objetivo. Simples,
            direto e pronto pra usar na academia.
          </p>

          <a
            href="#cta"
            className="cursor-pointer rounded-2xl bg-green-500 px-6 py-3 text-lg font-bold uppercase shadow-lg shadow-green-500/45 transition-all hover:scale-102 hover:brightness-105"
          >
            Quero começar agora
          </a>
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
        <section className="flex flex-col items-center justify-center gap-8 bg-slate-100 px-5 py-20">
          <div className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl bg-rose-500 p-6 shadow-lg shadow-rose-500/40">
            <strong className="text-center text-xl font-black">
              ⏰ Oferta especial expira em:
            </strong>

            <div className="mx-auto grid w-11/12 grid-cols-3 gap-3">
              <div className="flex flex-col items-center justify-center rounded-xl bg-white p-2">
                <span className="text-4xl font-black text-slate-900">01</span>
                <span className="text-xs font-semibold text-slate-500 uppercase">
                  Horas
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-xl bg-white p-2">
                <span className="text-4xl font-black text-slate-900">01</span>
                <span className="text-xs font-semibold text-slate-500 uppercase">
                  Min
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-xl bg-white p-2">
                <span className="text-4xl font-black text-slate-900">01</span>
                <span className="text-xs font-semibold text-slate-500 uppercase">
                  Seg
                </span>
              </div>
            </div>
          </div>

          <h3 className="text-center text-2xl font-black text-slate-900">
            Guia de shapes femininos
          </h3>

          <div className="flex w-full flex-col items-center justify-center gap-8 rounded-3xl border border-slate-300 bg-white p-5 shadow-xl shadow-slate-300/40">
            <h4 className="text-center text-2xl font-black text-slate-900">
              Acesso completo
            </h4>

            <div>
              <div className="flex flex-col items-center justify-center gap-1">
                <s className="text-slate-500">R$47,00</s>
                <b className="text-6xl font-black text-green-500">R$10,00</b>
                <p className="text-sm text-slate-500">pagamento único.</p>
                <b className="text-sm text-green-500">
                  Você economiza{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(47 - 10)}
                </b>
              </div>
            </div>

            <ul className="space-y-5">
              <li className="flex items-center gap-2 text-slate-500">
                <Check className="size-4 text-green-500" /> 4 fichas de treino
                por shape (A/B/C)
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <Check className="size-4 text-green-500" /> Exercícios com
                séries e repetições
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <Check className="size-4 text-green-500" /> Foco no shape sem
                negligenciar o resto
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <Check className="size-4 text-green-500" /> PDF leve (abre no
                celular)
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <Check className="size-4 text-green-500" /> Acesso imediato
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <Check className="size-4 text-green-500" /> Garantia de 7 dias
              </li>
            </ul>

            <button
              id="cta"
              className="w-full cursor-pointer rounded-2xl bg-green-500 px-6 py-3 text-lg font-bold uppercase shadow-lg shadow-green-500/45 transition-all hover:scale-102 hover:brightness-105"
            >
              Comprar agora
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
