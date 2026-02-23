import { ClockIcon } from "lucide-react";

import { shapesShowcases } from "@/app/_constants/shapes-showcases";

import { ShapeCard } from "./components/shape-card";

export function ShapeShowcaseSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-14 overflow-hidden bg-zinc-100 px-5 py-20 before:absolute before:-top-20 before:-left-30 before:z-0 before:block before:size-120 before:rounded-full before:bg-rose-500/10 before:blur-[80px] before:content-[''] after:absolute after:-right-30 after:-bottom-20 after:z-0 after:block after:size-120 after:rounded-full after:bg-emerald-500/10 after:blur-[80px] after:content-['']">
      <h2 className="z-1 text-center text-3xl/tight font-bold text-zinc-900 md:w-3/4 md:text-4xl/tight lg:w-2/5">
        O corpo muda quando o treino tem{" "}
        <span className="font-black text-rose-500">direção.</span>
      </h2>

      <div className="z-1 grid grid-cols-1 items-center gap-14 md:grid-cols-2 lg:grid-cols-4">
        {shapesShowcases.map((shape) => (
          <ShapeCard key={shape.id} shape={shape} />
        ))}
      </div>

      <div className="z-1 flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-2 shadow-md ring ring-zinc-200 select-none">
        <ClockIcon className="size-8 text-emerald-500 md:size-5" />
        <p className="text-center text-sm/relaxed font-medium text-zinc-500">
          Escolha o shape certo e receba o treino exato para chegar lá
        </p>
      </div>
    </section>
  );
}
