import { causesToBuy } from "@/app/_constants/causes-to-buy";

import { CauseCard } from "../CauseCard";

export const CausesToBuy = () => {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      {causesToBuy.map((cause, index) => (
        <CauseCard key={index} cause={cause} />
      ))}
    </div>
  );
};
