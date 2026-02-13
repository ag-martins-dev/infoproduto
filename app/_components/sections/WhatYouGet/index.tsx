import { Benefits } from "./_components/Benefits";

export const WhatYouGetSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-14 bg-slate-900 px-5 py-20">
      <h2 className="text-center text-3xl leading-11 font-black text-white md:text-4xl md:leading-12">
        O que você receberá
      </h2>

      <Benefits />
    </section>
  );
};
