import { Benefits } from "./_components/Benefits";

export const WhatYouGetSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-14 bg-zinc-900 px-5 py-20">
      <h2 className="text-center text-3xl/tight font-bold text-white md:text-4xl/tight">
        O que você vai receber
      </h2>

      <Benefits />
    </section>
  );
};
