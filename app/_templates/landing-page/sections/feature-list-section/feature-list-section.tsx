import { features } from "@/app/_constants/features";

import { FeatureCard } from "./components/feature-card";

export function FeatureListSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-14 overflow-hidden bg-zinc-900 px-5 py-20 before:absolute before:top-20 before:left-20 before:z-0 before:block before:size-80 before:bg-rose-500/10 before:blur-[80px] before:content-[''] after:absolute after:right-20 after:bottom-20 after:z-0 after:block after:size-80 after:bg-emerald-500/10 after:blur-[80px] after:content-['']">
      <div className="z-1 flex flex-col items-center justify-center gap-2">
        <h2 className="text-center text-3xl/tight font-bold text-white md:text-4xl/tight">
          O que você vai{" "}
          <span className="font-black text-rose-500">receber</span>
        </h2>

        <p className="text-center text-sm/relaxed font-medium text-zinc-400">
          Tudo que você precisa, sem enrolação.
        </p>
      </div>

      <div className="z-1 grid grid-cols-1 gap-6 select-none md:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>

      <p className="z-1 text-center text-xs/relaxed font-medium text-zinc-500">
        Tudo em um único arquivo, para sempre.
      </p>
    </section>
  );
}
