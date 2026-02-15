import { CausesToBuy } from "./_components/CausesToBuy";

export const CausesToBuySection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 bg-white px-5 py-20">
      <h2 className="text-center text-3xl/tight font-bold text-zinc-900 md:text-4xl/tight">
        Para quem é esse guia
      </h2>

      <CausesToBuy />
    </section>
  );
};
