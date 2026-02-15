import Image from "next/image";

export const VisualProofSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-zinc-100 px-5 py-20">
      <h2 className="text-center text-3xl/tight font-bold text-zinc-900 md:w-3/5 md:text-4xl/tight lg:w-2/6">
        O corpo muda quando o treino tem{" "}
        <span className="text-rose-500">direção.</span>
      </h2>

      <div className="relative h-60 w-full md:h-96">
        <Image
          sizes="100vw"
          src={"/shapes-nobg.avif"}
          alt="Mulheres musculosas."
          className="object-contain"
          loading="lazy"
          fill
        />
      </div>
    </section>
  );
};
