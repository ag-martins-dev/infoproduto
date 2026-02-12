export default function HomePage() {
  return (
    <div className="h-screen w-full bg-zinc-50">
      <header className="flex w-full items-center justify-center bg-zinc-900 py-3">
        <p className="text-center font-bold uppercase">
          Oferta de lançamento - Acesso imediato
        </p>
      </header>

      <main>
        {/* Hero/Apresentação */}
        <section className="flex flex-col items-center justify-center gap-5 bg-zinc-100 py-20">
          <h1 className="max-w-11/12 text-center text-4xl font-bold text-zinc-900">
            Você treina... mas não chega no{" "}
            <span className="text-rose-500">corpo que quer?</span>
          </h1>

          <p className="max-w-11/12 text-center text-xl text-zinc-700">
            Escolha o shape e siga o treino certo para o seu objetivo. Simples,
            direto e pronto pra usar na academia.
          </p>

          <button className="cursor-pointer rounded-2xl bg-green-500 px-6 py-3 text-lg font-bold uppercase shadow-lg transition-all hover:scale-102 hover:brightness-105">
            Quero começar agora
          </button>
        </section>
      </main>
    </div>
  );
}
