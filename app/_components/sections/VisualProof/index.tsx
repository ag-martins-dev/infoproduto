import { ClockIcon } from "lucide-react";
import Image from "next/image";

export const VisualProofSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-8 overflow-hidden bg-zinc-100 px-5 py-20 before:absolute before:-top-20 before:-left-30 before:z-0 before:block before:size-120 before:rounded-full before:bg-rose-500/10 before:blur-[80px] before:content-[''] after:absolute after:-right-30 after:-bottom-20 after:z-0 after:block after:size-120 after:rounded-full after:bg-emerald-500/10 after:blur-[80px] after:content-['']">
      <h2 className="z-1 text-center text-3xl/tight font-bold text-zinc-900 md:w-3/4 md:text-4xl/tight lg:w-2/5">
        O corpo muda quando o treino tem{" "}
        <span className="font-black text-rose-500">direção.</span>
      </h2>

      <div className="z-1 grid grid-cols-1 items-center gap-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="group relative flex h-136 w-full flex-col items-center justify-between select-none">
          <Image
            src={"/shape-1.svg"}
            alt="Mulheres musculosas."
            width={200}
            height={448}
            className="z-1 h-112 w-50 object-contain object-top transition-all ease-in-out group-hover:-translate-y-3"
            loading="lazy"
          />

          <div className="absolute top-1/2 left-1/2 z-0 block size-50 -translate-x-1/2 bg-rose-500 opacity-0 blur-[80px] transition-all group-hover:-translate-y-1/2 group-hover:opacity-40" />

          <div className="z-2 flex w-full flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-2 shadow-md ring ring-zinc-200 transition-all ease-in-out select-none group-hover:ring-rose-500">
              <div className="block size-3 rounded-full bg-rose-500" />
              <span className="font-semibold text-rose-500">Glúteos</span>
            </div>
            <p className="text-center text-sm/relaxed font-medium text-zinc-500">
              Foco em glúteos
            </p>
          </div>
        </div>

        <div className="group relative flex h-136 w-full flex-col items-center justify-between select-none">
          <Image
            src={"/shape-2.svg"}
            alt="Mulheres musculosas."
            width={200}
            height={500}
            className="z-1 h-118 w-50 object-contain object-top transition-all ease-in-out group-hover:-translate-y-3"
            loading="lazy"
          />

          <div className="absolute top-1/2 left-1/2 z-0 block size-50 -translate-x-1/2 bg-cyan-500 opacity-0 blur-[80px] transition-all group-hover:-translate-y-1/2 group-hover:opacity-40" />

          <div className="z-2 flex w-full flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-2 shadow-md ring ring-zinc-200 transition-all ease-in-out select-none group-hover:ring-cyan-500">
              <div className="block size-3 rounded-full bg-cyan-500" />
              <span className="font-semibold text-cyan-500">Slim</span>
            </div>

            <p className="text-center text-sm/relaxed font-medium text-zinc-500">
              Foco em definição
            </p>
          </div>
        </div>

        <div className="group relative flex h-136 w-full flex-col items-center justify-between select-none">
          <Image
            src={"/shape-3.svg"}
            alt="Mulheres musculosas."
            width={200}
            height={448}
            className="z-1 h-112 w-50 object-contain object-top transition-all ease-in-out group-hover:-translate-y-3"
            loading="lazy"
          />

          <div className="absolute top-1/2 left-1/2 z-0 block size-50 -translate-x-1/2 bg-blue-500 opacity-0 blur-[80px] transition-all group-hover:-translate-y-1/2 group-hover:opacity-40" />

          <div className="z-2 flex w-full flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-2 shadow-md ring ring-zinc-200 transition-all ease-in-out select-none group-hover:ring-blue-500">
              <div className="block size-3 rounded-full bg-blue-500" />
              <span className="font-semibold text-blue-500">Pernas</span>
            </div>

            <p className="text-center text-sm/relaxed font-medium text-zinc-500">
              Foco em pernas
            </p>
          </div>
        </div>

        <div className="group relative flex h-136 w-full flex-col items-center justify-between gap-4 select-none">
          <Image
            src={"/shape-4.svg"}
            alt="Mulheres musculosas."
            width={200}
            height={448}
            className="z-1 h-112 w-50 object-contain object-top transition-all ease-in-out group-hover:-translate-y-3"
            loading="lazy"
          />

          <div className="absolute top-1/2 left-1/2 z-0 block size-50 -translate-x-1/2 bg-red-500 opacity-0 blur-[80px] transition-all group-hover:-translate-y-1/2 group-hover:opacity-40" />

          <div className="z-2 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-2 shadow-md ring ring-zinc-200 transition-all ease-in-out select-none group-hover:ring-red-500">
              <div className="block size-3 rounded-full bg-red-500" />
              <p className="font-semibold text-red-500">Fitness</p>
            </div>

            <p className="text-center text-sm/relaxed font-medium text-zinc-500">
              Foco em performance
            </p>
          </div>
        </div>
      </div>

      <div className="z-1 flex items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-2 shadow-md ring ring-zinc-200 select-none">
        <ClockIcon className="size-8 text-emerald-500 md:size-5" />
        <p className="text-center text-sm/relaxed font-medium text-zinc-500">
          Escolha o shape certo e receba o treino exato para chegar lá
        </p>
      </div>
    </section>
  );
};
