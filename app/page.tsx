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
        <section className="flex flex-col items-center justify-center gap-6 bg-slate-100 px-5 py-20">
          <h1 className="text-center text-4xl leading-11 font-black text-slate-900">
            Você treina... mas não chega no{" "}
            <span className="text-rose-500">corpo que quer?</span>
          </h1>

          <p className="text-center text-lg text-slate-700">
            Escolha o shape e siga o treino certo para o seu objetivo. Simples,
            direto e pronto pra usar na academia.
          </p>

          <button className="cursor-pointer rounded-2xl bg-green-500 px-6 py-3 text-lg font-bold uppercase shadow-lg shadow-green-500/45 transition-all hover:scale-102 hover:brightness-105">
            Quero começar agora
          </button>
        </section>

        {/* Visual Proof/Prova visual */}
        <section className="flex flex-col items-center justify-center bg-white px-5 py-20 md:gap-6">
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
      </main>
    </div>
  );
}
