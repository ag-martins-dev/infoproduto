import { memo } from "react";

import { padNumber } from "@/app/_utils/pad-number";

type CountdownUnitProps = {
  unit: number;
  label: string;
};

export const CountdownUnit = memo(({ unit, label }: CountdownUnitProps) => {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-2 select-none">
      <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-rose-400/25 p-5 shadow-md ring ring-rose-300/80">
        <strong className="text-4xl font-black text-white">
          {padNumber(unit)}
        </strong>
      </div>

      <span className="text-sm/relaxed font-semibold text-zinc-200 uppercase">
        {label}
      </span>
    </div>
  );
});
CountdownUnit.displayName = "CountdownUnit";
