import { memo } from "react";

import { padNumber } from "@/app/_utils/pad-number";

type TimeUnitProps = {
  time: number;
};

export const TimeUnit = memo(({ time }: TimeUnitProps) => {
  return (
    <span className="text-4xl font-bold text-zinc-900">{padNumber(time)}</span>
  );
});
TimeUnit.displayName = "TimeUnit";
