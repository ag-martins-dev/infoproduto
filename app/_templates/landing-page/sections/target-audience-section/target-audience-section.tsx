import { targetAudiences } from "@/app/_constants/target-audiences";

import { TargetAudienceItem } from "./components/target-audience";

export function TargetAudienceSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 bg-white px-5 py-20">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="text-center text-3xl/tight font-bold text-zinc-900 md:text-4xl/tight">
          Para quem é{" "}
          <span className="font-black text-rose-500">esse guia</span>
        </h2>
        <p className="text-center text-base/relaxed text-zinc-500">
          Se você se identifica com pelo menos um desses pontos, chegou no lugar
          certo.
        </p>
      </div>

      <ul className="grid w-full grid-cols-1 gap-4 md:w-9/12 md:grid-cols-2">
        {targetAudiences.map((targetAudience) => (
          <TargetAudienceItem
            key={targetAudience.id}
            targetAudience={targetAudience}
            icon={targetAudience.icon}
          />
        ))}
      </ul>
    </section>
  );
}
