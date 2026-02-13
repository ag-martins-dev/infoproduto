import Image from "next/image";

export const VisualProofSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white px-5 py-20 md:gap-12">
      <h2 className="text-center text-3xl leading-11 font-black text-slate-900 md:w-3/5 md:text-4xl md:leading-12 lg:w-2/6">
        O corpo muda quando o treino tem{" "}
        <span className="text-rose-500">direção.</span>
      </h2>

      <div className="relative h-60 w-full md:h-96">
        <Image
          sizes="100vw"
          src={"/shapes.avif"}
          alt="Mulheres musculosas ilustrando resultados da planilha."
          className="object-contain"
          fill
        />
      </div>
    </section>
  );
};
